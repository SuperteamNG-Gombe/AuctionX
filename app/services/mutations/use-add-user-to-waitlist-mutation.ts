import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";

import api from "@/config/api";

interface Credentials {
  email: string;
}

const purchase = async (credentials: Credentials): Promise<any> => {
  const response = await api.post("waitlist", credentials);

  return response.data;
};

const useAddUserToWaitListMutation = (
  props?: UseMutationOptions<any, unknown, Credentials>
): UseMutationResult<any, unknown, Credentials> => {
  return useMutation({
    mutationKey: ["waitlist"],
    mutationFn: (credentials: Credentials) => purchase(credentials),
    ...props,
  });
};

export default useAddUserToWaitListMutation;
