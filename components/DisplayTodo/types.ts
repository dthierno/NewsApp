import { TodoList } from "@/app/types";

export type DisplayTodoProps = {
    todoList: TodoList[],
    handleDelete: (todoId: number) => void,
};