/**
 * Copyright (c) 2022, WSO2 Inc. (http://www.wso2.com) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { AsgardeoAuthException } from "@asgardeo/auth-react";
import React, { FunctionComponent, ReactElement } from "react";
import { AuthenticationFailure } from "./pages/AuthenticationFailure";
import { InvalidSystemTimePage } from "./pages/InvalidSystemTime";

interface ErrorBoundaryProps {
    error: AsgardeoAuthException;
    children: ReactElement;
}

export const ErrorBoundary: FunctionComponent<ErrorBoundaryProps> = (
    props: ErrorBoundaryProps
): ReactElement => {
    const { error, children } = props;

    if (error?.code === "JS-CRYPTO_UTILS-IVIT-IV02") {
        return <InvalidSystemTimePage />;
    } else if (error?.code === "SPA-MAIN_THREAD_CLIENT-SI-SE01" || 
        error?.code === "TOKEN_EXCHANGE-AUTH_HELPER-RAT3-NF01") {
        return <AuthenticationFailure />;
    }

    return children;
};
