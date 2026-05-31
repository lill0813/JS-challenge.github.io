@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

* {
    box-sizing: border-box;
}


body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    color: #ffffff !important;
    background-color: #2c3e50;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;  
    align-items: center;     
    text-align: center;
    overflow: hidden;
    position: relative;
}

body::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 0;
}

.hidden {
    display: none !important;
}

#weather {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 1.1rem;
    color: #ffffff !important;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 1;
}


main {
    z-index: 1;
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


#clock {
    font-size: 6.5rem;
    margin: 0 0 10px 0;
    font-weight: 600;
    color: #ffffff !important;
    text-shadow: 2px 2px 6px rgba(0,0,0,0.4);
}


#greeting {
    font-size: 2.8rem;
    margin: 15px 0;
    font-weight: 600;
    color: #ffffff !important;
    text-shadow: 1px 1px 4px rgba(0,0,0,0.5);
}


#login-form, #todo-form {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
}

/* 입력창 커스텀 (밑줄 스타일, 텍스트 흰색) */
#login-form input, #todo-form input {
    background: transparent;
    border: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.6);
    color: #ffffff !important;
    font-size: 1.6rem;
    text-align: center;
    padding: 10px;
    outline: none;
    width: 80%;
    transition: border-color 0.3s;
}

#login-form input::placeholder, #todo-form input::placeholder {
    color: rgba(255, 255, 255, 0.7) !important;
}

#login-form input:focus, #todo-form input:focus {
    border-bottom-color: #ffffff;
}


#todo-list {
    list-style: none;
    padding: 0;
    margin: 10px 0 0 0;
    width: 80%;
    max-height: 220px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}


#todo-list li {
    width: 100%;
    font-size: 1.1rem;
    color: #ffffff !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.2);
    padding: 12px 20px;
    margin-bottom: 8px;
    border-radius: 8px;
    backdrop-filter: blur(5px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.15);
}

#todo-list li span {
    word-break: break-all;
    text-align: left;
}


#todo-list li button {
    background: none;
    border: none;
    color: #ffffff !important;
    font-size: 1.1rem;
    cursor: pointer;
    opacity: 0.7;
    transition: all 0.2s;
    margin-left: 10px;
}

#todo-list li button:hover {
    opacity: 1;
    color: #ff7675 !important;
    transform: scale(1.1);
}
