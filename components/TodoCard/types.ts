import { TodoList } from "@/app/types"

export type TodoCardProps = {
    data: TodoList,
    handleDelete: (todoId: number) => void
}