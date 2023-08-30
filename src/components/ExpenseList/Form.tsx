import React, { FormEvent } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3),
  age: z.number({ invalid_type_error: "Age field is required." }).min(18),
  Amount: z.string().min(3),
  category: z.string({ invalid_type_error: "Category field is required." }),
});

type FormData = z.infer<typeof schema>;

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Description
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="Amount" className="form-label">
          Amount
        </label>
        <input
          {...register("Amount")}
          id="Amount"
          type="text"
          className="form-control"
        />
        {errors.Amount && (
          <p className="text-danger">{errors.Amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          category
        </label>
        <select
          {...register("category")}
          id="category"
          className="form-control"
        >
          <option value="Groceries">Groceries</option>
          <option value="Utilites">Utilites</option>
          <option value="Entertainment">Entertainment</option>
        </select>

        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button disabled={!isValid} className="btn-btn-primary" type="submit">
        submit
      </button>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          category
        </label>
        <select
          {...register("category")}
          id="category"
          className="form-control"
        >
          <option value="Groceries">Groceries</option>
          <option value="Utilites">Utilites</option>
          <option value="Entertainment">Entertainment</option>
        </select>

        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
    </form>
  );
};

export default Form;
