
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "sonner"
import { Button } from "../ui/button" 

import { Input } from "../ui/input" 
import { Textarea } from "../ui/textarea"
import {
  
    Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../..//components/ui/form"
import { Card, CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,} from "../ui/card"
import { useForm } from "react-hook-form"
import { useState } from "react"

const formSchema = z.object({
  title: z
    .string()
    .min(5, "Bug title must be at least 5 characters")
    .max(32),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters")
    .max(100),
})

export function BugReportForm() {
    const [value,setValue]=useState(" ")
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  })

  function onSubmit(data) {
    setValue(data);
    console.log("value is",value)
    toast.success("Bug submitted successfully", {
      description: (
        <pre className="mt-2 rounded-md bg-muted p-4 text-sm">
          {JSON.stringify(data, null, 2)}
          
        </pre>
      ),
    })
  }

  return (
    <Card className="mx-auto w-full max-w-lg mt-3">
      <CardHeader>
        <CardTitle>Bug Report</CardTitle>
        <CardDescription>
          Help us improve by reporting issues you encounter.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bug Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Login button not working"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={5}
                      placeholder="Steps to reproduce, expected behavior..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <CardFooter className="px-0">
              <Button type="submit" className="w-full">
                Submit Bug
              </Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
