import { Container, Grid, GridItem, Image } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { useIsMutating } from 'react-query';
import { NextPageWithLayout } from 'src/shared/model/next.types';
import { LOGIN_KEY } from '../src/entities/auth/model/hooks/useLoginMutation';
import { LoginForm } from '../src/entities/auth/ui/LoginForm/LoginForm';
import { FullLoader } from '../src/shared/ui/components/Loader/Full/FullLoader';
import { NoLayout } from '../src/shared/ui/components/NoLayout';

const LoginPage: NextPageWithLayout = () => {
  const isLoading = useIsMutating(LOGIN_KEY) > 0;

  return (
    <>
      <Head>
        <title>Login page S-Group</title>
      </Head>

      <FullLoader isLoading={isLoading} />

      <Container maxW="container.xl">
        <Grid templateColumns="repeat(2, 1fr)" height="100vh">
          <GridItem>
            <LoginForm />
          </GridItem>

          <GridItem>
            <div>
              <Image
                className="h-screen"
                src="/login-background.jpg"
                alt="Background image"
              />
            </div>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

LoginPage.getLayout = NoLayout;

export default LoginPage;
