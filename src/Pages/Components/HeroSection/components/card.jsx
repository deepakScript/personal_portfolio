import React from 'react';
import styled from 'styled-components';
import deepak from "../../../../assets/deepak.jpg";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card" >
        <img src={deepak} alt="Deepak" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
        </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 300px;
    height: 370px;
    border: none;
    border-radius: 10px;
    background: radial-gradient(ellipse farthest-side at 76% 77%, rgba(245, 228, 212, 0.25) 4%, rgba(255, 255, 255, 0) calc(4% + 1px)), radial-gradient(circle at 76% 40%, #fef6ec 4%, rgba(255, 255, 255, 0) 4.18%), linear-gradient(135deg, #ff0000 0%, #000036 100%), radial-gradient(ellipse at 28% 0%, #ffcfac 0%, rgba(98, 149, 144, 0.5) 100%), linear-gradient(180deg, #cd6e8a 0%, #f5eab0 69%, #d6c8a2 70%, #a2758d 100%);
    background-blend-mode: normal, normal, screen, overlay, normal;
    box-shadow: 0px 0px 10px 1px #000000;
  }`;

export default Card;
