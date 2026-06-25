// "use client";

// import * as React from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Controller, useForm } from "react-hook-form";
// import { toast } from "sonner";
// import * as z from "zod";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Field,
//   FieldDescription,
//   FieldError,
//   FieldGroup,
//   FieldLabel,
// } from "@/components/ui/field";
// import { Input } from "@/components/ui/input";
// import {
//   InputGroup,
//   InputGroupAddon,
//   InputGroupText,
//   InputGroupTextarea,
// } from "@/components/ui/input-group";

// export const formSchema = z.object({
//   id: z.number().int("ID must be an integer.").positive("ID must be positive."),

//   title: z
//     .string()
//     .min(3, "Title must be at least 3 characters.")
//     .max(100, "Title must be at most 100 characters."),

//   slug: z
//     .string()
//     .min(3, "Slug must be at least 3 characters.")
//     .max(100, "Slug must be at most 100 characters.")
//     .regex(
//       /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
//       "Slug can only contain lowercase letters, numbers, and hyphens.",
//     ),

//   price: z.number().positive("Price must be greater than 0."),

//   description: z
//     .string()
//     .min(20, "Description must be at least 20 characters.")
//     .max(1000, "Description must be at most 1000 characters."),

//   images: z
//     .array(z.string().url("Each image must be a valid URL."))
//     .min(1, "At least one image is required."),
// });

// export type ProductFormData = z.infer<typeof formSchema>;

// export function BugReportForm() {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       title: "",
//       slug: "",
//       price: 0,
//       description: "",
//       images: undefined,
//     },
//   });

//   function onSubmit(data: z.infer<typeof formSchema>) {
//     toast("You submitted the following values:", {
//       description: (
//         <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
//           <code>{JSON.stringify(data, null, 2)}</code>
//         </pre>
//       ),
//       position: "bottom-right",
//       classNames: {
//         content: "flex flex-col gap-2",
//       },
//       style: {
//         "--border-radius": "calc(var(--radius)  + 4px)",
//       } as React.CSSProperties,
//     });
//   }

//   return (
//     <Card className="w-full sm:max-w-md">
//       <CardHeader>
//         <CardTitle>Bug Report</CardTitle>
//         <CardDescription>
//           Help us improve by reporting bugs you encounter.
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
//           <FieldGroup>
//             <Controller
//               name="title"
//               control={form.control}
//               render={({ field, fieldState }) => (
//                 <Field data-invalid={fieldState.invalid}>
//                   <FieldLabel htmlFor="form-rhf-demo-title">
//                     Product Title
//                   </FieldLabel>
//                   <Input
//                     {...field}
//                     id="form-rhf-demo-title"
//                     aria-invalid={fieldState.invalid}
//                     placeholder="Login button not working on mobile"
//                     autoComplete="off"
//                   />
//                   {fieldState.invalid && (
//                     <FieldError errors={[fieldState.error]} />
//                   )}
//                 </Field>
//               )}
//             />
//             <Controller
//               name="slug"
//               control={form.control}
//               render={({ field, fieldState }) => (
//                 <Field data-invalid={fieldState.invalid}>
//                   <FieldLabel htmlFor="form-rhf-demo-slug">
//                     Product slug
//                   </FieldLabel>
//                   <Input
//                     {...field}
//                     id="form-rhf-demo-slug"
//                     aria-invalid={fieldState.invalid}
//                     placeholder="Login button not working on mobile"
//                     autoComplete="off"
//                   />
//                   {fieldState.invalid && (
//                     <FieldError errors={[fieldState.error]} />
//                   )}
//                 </Field>
//               )}
//             />

//             <Controller
//               name="price"
//               control={form.control}
//               render={({ field, fieldState }) => (
//                 <Field data-invalid={fieldState.invalid}>
//                   <FieldLabel htmlFor="form-rhf-demo-price">
//                     Product Price
//                   </FieldLabel>
//                   <Input
//                     {...field}
//                     id="form-rhf-demo-price"
//                     aria-invalid={fieldState.invalid}
//                     placeholder="100"
//                     autoComplete="off"
//                   />
//                   {fieldState.invalid && (
//                     <FieldError errors={[fieldState.error]} />
//                   )}
//                 </Field>
//               )}
//             />

//             <Controller
//               name="description"
//               control={form.control}
//               render={({ field, fieldState }) => (
//                 <Field data-invalid={fieldState.invalid}>
//                   <FieldLabel htmlFor="form-rhf-demo-description">
//                     Description
//                   </FieldLabel>
//                   <InputGroup>
//                     <InputGroupTextarea
//                       {...field}
//                       id="form-rhf-demo-description"
//                       placeholder="I'm having an issue with the login button on mobile."
//                       rows={6}
//                       className="min-h-24 resize-none"
//                       aria-invalid={fieldState.invalid}
//                     />
//                     <InputGroupAddon align="block-end">
//                       <InputGroupText className="tabular-nums">
//                         {field.value.length}/100 characters
//                       </InputGroupText>
//                     </InputGroupAddon>
//                   </InputGroup>
//                   <FieldDescription>
//                     Include steps to reproduce, expected behavior, and what
//                     actually happened.
//                   </FieldDescription>
//                   {fieldState.invalid && (
//                     <FieldError errors={[fieldState.error]} />
//                   )}
//                 </Field>
//               )}
//             />

//             <Controller
//               name="price"
//               control={form.control}
//               render={({ field, fieldState }) => (
//                 <Field data-invalid={fieldState.invalid}>
//                   <FieldLabel htmlFor="form-rhf-demo-price">
//                     Product slug
//                   </FieldLabel>
//                   <Input
//                     {...field}
//                     id="form-rhf-demo-price"
//                     aria-invalid={fieldState.invalid}
//                     placeholder="100"
//                     autoComplete="off"
//                   />
//                   {fieldState.invalid && (
//                     <FieldError errors={[fieldState.error]} />
//                   )}
//                 </Field>
//               )}
//             />
//           </FieldGroup>
//         </form>
//       </CardContent>
//       <CardFooter>
//         <Field orientation="horizontal">
//           <Button type="button" variant="outline" onClick={() => form.reset()}>
//             Reset
//           </Button>
//           <Button type="submit" form="form-rhf-demo">
//             Submit
//           </Button>
//         </Field>
//       </CardFooter>
//     </Card>
//   );
// }













