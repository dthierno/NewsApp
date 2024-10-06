
export type AddTodoType = {
    todo: string,
    title?: string,
    description?: string,
    handleSubmit: () => void,
    setTodo: (value: React.SetStateAction<string>) => void
}