import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ITask } from '../../models/interfaces';

interface ITasks {
    tasks: ITask[]
}

const initialState: ITasks = {
    tasks: [
        { id: 1, title: 'Task 1', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum orci at feugiat malesuada. Quisque malesuada magna at pellentesque pulvinar. Etiam ligula augue, faucibus ac nisl non, eleifend feugiat nisi." },
        { id: 2, title: 'Task 2', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" },
        { id: 3, title: 'Task 3', description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." },
        { id: 4, title: 'Task 4', description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." },
        { id: 5, title: 'Task 5', description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words," },
        { id: 6, title: 'Task 6', description: "consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in" },
        { id: 7, title: 'Task 7', description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." },
        { id: 8, title: 'Task 8', description: " If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. " },
        { id: 9, title: 'Task 9', description: " All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." },
        { id: 10, title: 'Task 10', description: "Morbi consequat tempor nisi id congue. Praesent fermentum nunc felis, non vehicula dolor maximus a. Morbi viverra dolor ac eros placerat, in sollicitudin augue lacinia. Praesent sit amet suscipit justo. Vivamus nec dui quis massa gravida gravida. Suspendisse nisi ante, placerat suscipit iaculis nec, facilisis at tellus. Maecenas eget dui ex. Phasellus volutpat lacinia risus, dapibus tempor lorem lacinia eget." },
    ]
}
export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            state.tasks.push(action.payload)
        },
        removeTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        editTask: (state, action: PayloadAction<ITask>) => {
            state.tasks[action.payload.id] = action.payload
        },
    },
});


export const { removeTask, editTask, addTask } = tasksSlice.actions



export default tasksSlice.reducer