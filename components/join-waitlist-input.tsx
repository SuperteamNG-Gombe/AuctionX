"use client";
import { FormEventHandler, useState } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { addToast } from "@heroui/toast";

import { Spinner } from "@heroui/spinner";

import useAddUserToWaitListMutation from "@/app/services/mutations/use-add-user-to-waitlist-mutation";

const JoinWaitlistInput = () => {
  const [email, setEmail] = useState<string>();

  const { mutate, isPending } = useAddUserToWaitListMutation({
    onSuccess(data) {
      addToast({
        title: "Success",
        description: `${email} added to waitlist`,
        color: "success",
      });
    },

    onError(error) {
      addToast({
        title: "Error",
        description: (error as any).response.data.error,
        color: "danger",
      });
    },
  });

  const handleSubmitEmail: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();
    if (email) {
      mutate({ email });
      addToast({ description: "Hold a breath", icon: <Spinner size="sm" /> });
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
        className="absolute flex items-center gap-2 -translate-y-1/2 rounded-full top-1/2 right-2"
        disabled={isPending}
        type="submit"
        variant="bordered"
      >
        {isPending && <Spinner size="sm" />}
        Join
      </Button>
    </form>
  );
};

export default JoinWaitlistInput;
