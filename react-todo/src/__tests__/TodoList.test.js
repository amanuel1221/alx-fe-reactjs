import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  const todoItems = screen.getAllByTestId("todo-item");
  expect(todoItems.length).toBeGreaterThanOrEqual(2);
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByTestId("todo-input");
  const addButton = screen.getByTestId("add-btn");

  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.click(addButton);

  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

test("toggles todo completion", () => {
  render(<TodoList />);
  const todoItem = screen.getAllByTestId("todo-item")[0];
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const deleteButtons = screen.getAllByTestId("delete-btn");
  const initialCount = screen.getAllByTestId("todo-item").length;

  fireEvent.click(deleteButtons[0]);
  const newCount = screen.getAllByTestId("todo-item").length;

  expect(newCount).toBe(initialCount - 1);
});
