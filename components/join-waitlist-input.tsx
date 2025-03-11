"use client";
import { FormEventHandler, useState } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { addToast } from "@heroui/toast";

import useAddUserToWaitListMutation from "@/app/services/mutations/use-add-user-to-waitlist-mutation";

const JoinWaitlistInput = () => {
  const { mutate } = useAddUserToWaitListMutation({
    onSuccess(data) {
      addToast({
        title: "Success",
        description: `${data.email} added to waitlist`,
        color: "success",
      });
    },

    onError(error) {
      addToast({
        title: "Error",
        description: (error as any).response.data.message,
        color: "danger",
      });
    },
  });

  const [email, setEmail] = useState<string>();

  const handleSubmitEmail: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();
    if (email) {
      mutate({ email });
    }
  };

  return (
    <form className="relative w-full" onSubmit={handleSubmitEmail}>
      <Input
        className="w-full"
        placeholder="example@gmail.com"
        radius="full"
        size="lg"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
      />
      <Button
        className="absolute -translate-y-1/2 rounded-full top-1/2 right-2"
        type="submit"
        variant="bordered"
      >
        Join
      </Button>
    </form>
  );
};

export default JoinWaitlistInput;
