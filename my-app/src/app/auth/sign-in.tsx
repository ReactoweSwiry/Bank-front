"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { AlertDestructive } from '@/components/custom/alert.error';
import { LoadingSpinner } from '@/components/custom/spinner.loading';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useMutation } from '@tanstack/react-query';
import axios from "axios"

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string()
})

const SignIn: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const mutation = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      const res = await axios.post("http://localhost:3333/auth/login", values);
      return res;
    }
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    mutation.mutateAsync(values);
  }

  if (mutation.isPending) console.log("Pending...");
  if (mutation.isError) console.error(mutation.error);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>
          Enter your credentials to sign in. Click submit when you're done.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="e-mail" {...field} type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="password" {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">{mutation.isPending ? <LoadingSpinner /> : "Submit"}</Button>
          </form>
          {mutation.isError ? <AlertDestructive message={mutation.error.message} /> : ""}
        </Form>
      </CardContent>
    </Card>
  )
};

export default SignIn;
