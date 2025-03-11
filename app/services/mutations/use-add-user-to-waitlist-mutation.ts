import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";

import api from "@/config/api";

interface Credentials {
  email: string;
}

const joinWaitlist = async (credentials: Credentials): Promise<any> => {
  try {
    const response = await api.post("/waitlist", credentials);

    return response.data;
  } catch (err) {
    throw err;
  }
};

const useAddUserToWaitListMutation = (
  props?: UseMutationOptions<any, unknown, Credentials>
): UseMutationResult<any, unknown, Credentials> => {
  return useMutation({
    mutationKey: ["waitlist"],
    mutationFn: joinWaitlist,
    ...props,
  });
};

export default useAddUserToWaitListMutation;
