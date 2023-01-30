import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NavBtnLink = styled(Link)`
display: inline-flex;
justify-content: center;
align-items: center;
cursor: pointer;
padding: 11px 28px;
border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
background-color: ${p => p.theme.colors.accent};
border-radius: 40px;
color: ${p => p.theme.colors.white};
letter-spacing: 0.04em;
font-family: ${p => p.theme.fonts.manrope};
font-size: 16px;
line-height: 1.375;
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

:hover,
:focus {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.accent};
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
`