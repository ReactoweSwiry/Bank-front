"use client"

import * as React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectItem, SelectContent, SelectValue, SelectTrigger } from '@/components/ui/select';
import { LoadingSpinner } from '@/components/custom/spinner.loading';
import { AlertDestructive } from '@/components/custom/alert.error';

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
import { useForm } from 'react-hook-form';

import { useMutation } from '@tanstack/react-query';
import axios from "axios"

import { GenderOpt } from './auth.enum';

const formSchema = z.object({
  fullName: z.string(),
  username: z.string(),
  email: z.string().email({ message: "Invalid email" }),
  password: z.string(),
  age: z.coerce.number().gte(18, 'Must be 18 and above'),
  gender: z.nativeEnum(GenderOpt),
})

const SignUp: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      username: "",
      email: "",
      password: "",
      age: 0,
      gender: GenderOpt.UNSPECIFIED,
    },
  })

  const mutation = useMutation({
    mutationFn: (values: z.infer<typeof formSchema>) => {
      return axios.post("http://localhost:3333/auth/register", values);
    }
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    mutation.mutate(values);
  }

  if (mutation.isPending) console.log("Pending...");
  if (mutation.isError) console.error(mutation.error);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>
          Create a new account. Fill in the required information and click submit.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name</FormLabel>
                  <FormControl>
                    <Input placeholder="fullname" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input placeholder="age" {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={GenderOpt.MALE}>{GenderOpt.MALE}</SelectItem>
                      <SelectItem value={GenderOpt.FEMALE}>{GenderOpt.FEMALE}</SelectItem>
                      <SelectItem value={GenderOpt.UNSPECIFIED}>{GenderOpt.UNSPECIFIED}</SelectItem>
                    </SelectContent>
                  </Select>
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

export default SignUp;
