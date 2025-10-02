import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PasswordPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password === "Brington@123") {
      navigate("/home");
    } else {
      setError("❌ Wrong password! Try again.");
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#ffffff',
      padding: '20px'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        color: '#1f2937'
      }}>Guest Area</h1>
      
      <p style={{
        color: '#6b7280',
        marginBottom: '2rem',
        fontSize: '1.1rem',
        textAlign: 'center'
      }}>
        Please enter the password to continue.
      </p>

      <form onSubmit={handleSubmit} style={{ 
        width: '100%',
        maxWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          placeholder="Enter password"
          style={{
            width: '100%',
            padding: '12px 16px',
            border: error ? '2px solid #ef4444' : '2px solid #d1d5db',
            borderRadius: '8px',
            marginBottom: '1rem',
            fontSize: '16px',
            textAlign: 'center',
            outline: 'none',
            transition: 'border-color 0.2s'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#3b82f6';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = error ? '#ef4444' : '#d1d5db';
          }}
        />
        
        {error && (
          <div style={{
            color: '#ef4444',
            marginBottom: '1rem',
            fontSize: '14px',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}
        
        <button
          type="submit"
          style={{
            backgroundColor: '#16a34a',
            color: 'white',
            padding: '12px 32px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            width: '100%',
            maxWidth: '200px'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#15803d'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#16a34a'}
        >
          Go
        </button>
      </form>
    </div>
  );
}