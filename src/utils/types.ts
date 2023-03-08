import type { inferRouterOutputs } from "@trpc/server";
import { z } from "zod";
import type { AppRouter } from "../server/api/root";

type RouterOutput = inferRouterOutputs<AppRouter>;
type allTodosOutput = RouterOutput["todo"]["getAll"];

export type Todo = allTodosOutput[number];
export type ICreateTodo = {
  id: string;
  text: string;
  done: boolean;
};

export const todoInput = z
  .string({
    required_error: "Describe your todo",
  })
  .min(5)
  .max(50);