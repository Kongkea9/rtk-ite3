"use client";
import { useForm } from "react-hook-form";

type ProductFormValue = {
  title: string;
  description: string;
};

export default function ProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ProductFormValue>({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  //handle submit

  function onSubmit(data: ProductFormValue) {
    console.log("Product Data: ", data);
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-20 space-y-6 bg-white p-6 rounded-xl shadow-md border w-96"
      >
        <h1 className="text-center">Create Product</h1>
        <div>
          <label htmlFor="" className="block text-sm font-medium">
            title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter product title"
            className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            {...register("title", {
              required: "Product title is require",
              minLength: 10,
            })}
          />

          {errors.title && (
            <p
              className="text-red-500
                text-sm"
            >
              {errors.title.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="" className="block text-sm font-medium">
            description
          </label>
          <input
            id="description"
            type="text"
            placeholder="Enter descript title"
            className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            {...register("description", {
              required: "Product description is require",
              minLength: 10,
            })}
          />

          {errors.description && (
            <p
              className="text-red-500
                text-sm"
            >
              {errors.description.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white px-4 py-2 rounded
disabled:opacity-50"
        >
          {isSubmitting ? "Creating..." : "Create Product"}
        </button>
      </form>
    </div>
  );
}
