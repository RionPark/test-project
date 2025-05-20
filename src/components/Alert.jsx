import React from 'react';
import styled from 'styled-components';

const AlertOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  color: #333;
  padding: 20px;
  border-radius: 8px;
  z-index: 10000;
  animation: fadeIn 0.3s;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  min-width: 300px;
  max-width: 450px;

  @keyframes fadeIn {
    from { 
      opacity: 0;
      transform: translate(-50%, -40%);
    }
    to { 
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
`;

const AlertHeader = styled.div`
  position: relative;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
`;

const Title = styled.h3`
  margin: 0;
  padding-right: 20px;
  font-size: 18px;
  font-weight: 600;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #666;
  padding: 0 5px;
  
  &:hover {
    color: #333;
  }
`;

const Content = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

function Alert({ title, message, onClose }) {
  return (
    <AlertOverlay id="alert-overlay">
      <AlertHeader>
        <Title>{title}</Title>
        <CloseButton onClick={onClose}>×</CloseButton>
      </AlertHeader>
      <Content>{message}</Content>
    </AlertOverlay>
  );
}

export default Alert; 