import { signIn } from 'next-auth/react';

import { Github } from './Github';
import { Google } from './Google';
import { Twitter } from './Twitter';

interface SocialSignOnProps {}

export function SocialSignOn({}: SocialSignOnProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      <Google
        handleGoogleAuth={() => {
          signIn('google', { callbackUrl: '/profile' });
        }}
      />
      <Twitter
        handleTwitterAuth={() => {
          signIn('twitter', { callbackUrl: '/profile' });
        }}
      />
      <Github
        handleGithubAuth={() => {
          signIn('github', { callbackUrl: '/profile' });
        }}
      />
    </div>
  );
}
