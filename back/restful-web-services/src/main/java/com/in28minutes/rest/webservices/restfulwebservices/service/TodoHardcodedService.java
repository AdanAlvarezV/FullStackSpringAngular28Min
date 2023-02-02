package com.in28minutes.rest.webservices.restfulwebservices.service;

import com.in28minutes.rest.webservices.restfulwebservices.model.Todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodedService {

    private static List<Todo> todos = new ArrayList<>();
    private static int idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "UsernameTest", "Learn to Dance", new Date(), Boolean.FALSE));
        todos.add(new Todo(++idCounter, "UsernameTest", "Learn about Microservices", new Date(), Boolean.FALSE));
        todos.add(new Todo(++idCounter, "UsernameTest", "Learn about Angular", new Date(), Boolean.FALSE));
    }

    public List<Todo> findAll(){
        return todos;
    }

    public Todo save(Todo todo){
        if (todo.getId() == -1 || todo.getId() == 0){
            todo.setId(++idCounter);
            todos.add(todo);
        } else {
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }

    public Todo deleteById(Integer id){
        Todo todo = findById(id);
        if (todo == null){
            return null;
        }
        if (todos.remove(todo)){
            return todo;
        }
        return null;
    }

    public Todo findById(Integer id){
        for (Todo todo: todos) {
            if(todo.getId() == id){
                return todo;
            }
        }
        return null;
    }
}
