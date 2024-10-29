type User = {
name: string;
surname: string;
email: string;
password: string;
}

function createOrUpdateUser(data: Partial<User>): User {
    const initialValues: User = {
    name: '',
    surname: '',
    email: '',
    password: '',
    };
    
    return { ...initialValues, ...data };

}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});
