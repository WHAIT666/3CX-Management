import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { verifyEmail } from '../../services/api'; // Ensure you have the verifyEmail function in your API service

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const id = searchParams.get('id');
  const code = searchParams.get('code');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const verifyUserEmail = async () => {
      try {
        if (id && code) {
          await verifyEmail(id, code);
          setMessage('Email verified successfully. Redirecting to login...');
          setTimeout(() => {
            navigate('/login');
          }, 3000);
        } else {
          setMessage('Invalid verification link.');
        }
      } catch (error) {
        setMessage('Failed to verify email. Please try again.');
      }
    };
    verifyUserEmail();
  }, [id, code, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">{message}</h1>
      </div>
    </div>
  );
};

export default VerifyEmail;
