import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  const items = screen.getAllByTestId("todo-item");
  expect(items.length).toBeGreaterThan(0);
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByTestId("todo-input");
  const button = screen.getByTestId("add-btn");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(button);

  expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("toggles todo completion", () => {
  render(<TodoList />);
  const firstTodo = screen.getAllByTestId("todo-item")[0];
  fireEvent.click(firstTodo);
  expect(firstTodo).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const deleteButtons = screen.getAllByTestId("delete-btn");
  const initialCount = screen.getAllByTestId("todo-item").length;
  fireEvent.click(deleteButtons[0]);
  const newCount = screen.getAllByTestId("todo-item").length;
  expect(newCount).toBe(initialCount - 1);
});
