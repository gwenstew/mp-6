import { signIn, signOut } from "@/app/auth";
import { Button } from "@mui/material";

export function SignIn({
    provider,
    ...props
  }: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
    return (
      <form
        action={async () => {
          "use server";
          await signIn(provider);
        }}
      >
        <Button {...props} type="submit" variant="contained" color="primary">
          Sign In
        </Button>
      </form>
    );
  }
  
  export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
    return (
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button
          {...props}
          type="submit"
          variant="outlined"
          color="secondary"
          fullWidth
        >
          Sign Out
        </Button>
      </form>
    );
  }
