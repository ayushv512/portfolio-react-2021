import styled from 'styled-components';
import { deviceWidths } from '../../config/config';

export const ContactForm = styled.form`

    @media (max-width:${deviceWidths.phoneWidth}) {
        .MuiInputBase-input{
            font-size: 14px;
        }
        .MuiInputBase-input::placeholder{
            font-size: 14px;
        }
    }
`;