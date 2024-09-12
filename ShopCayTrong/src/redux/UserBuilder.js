import { login, register } from "./UserAPI";
export function Login(builder) {
    builder.addCase(login.pending, (state) => {        
        console.log('>>>>>pending....')
    });
    builder.addCase(login.fulfilled, (state, action) => {       
        state.user = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {        
        console.log('>>>>>>>', action)
    });
}

export function Register(builder) {
    builder.addCase(register.pending, (state) => {       
        console.log('>>>>>pending....')
    });
    builder.addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        console.log('>>>fulfilled')
    });

    builder.addCase(register.rejected, (state, action) => {
        console.log('>>>>>>>', action)
    });
}