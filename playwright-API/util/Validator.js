export function validateUser(user){
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('email');
    expect(typeof user.id).toBe('number');
    expect(typeof user.name).toBe('string');
    expect(user.email).toContain('@');
}