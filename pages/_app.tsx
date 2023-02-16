import 'reseter.css/css/reseter.css';
import React from "react";
import {css} from '@linaria/core';
import cc from "classcat";
import { styled } from "@linaria/react";
import {reusedStyled} from '../shared/configs/reusedStyled';
import type {AppProps} from 'next/app'

export const rewrateReseter = css`
  body, a {
    font-family: 'Roboto', sans-serif;
  }

  * {
    font-family: 'Roboto', sans-serif;
  }
`;

const Root = styled.div`
background-color: #222222;
`


function MyApp({Component, pageProps}: AppProps) {
    return(
        <div className={cc([reusedStyled, rewrateReseter])}>
            <Root>
                <Component {...pageProps} />
            </Root>
        </div>
    )

}

export default MyApp
