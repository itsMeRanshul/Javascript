/* 
                                       Javascript Execution Context
            code{ } --> Global EC --> THIS
            --> Javascript is single threaded

            1. Global EC
            2. Function EC
            3. Eval EC

            How many phases are there??
            1. Global Execution phase --> this 
            2. Memory Creation phase 
                                       val1 <-- undefined
                                       val2 <-- undefined
                                       Function <-- defination
                                       res <-- undefined 
            3. Execution Phase
                                       val1 <-- 10
                                       val2 <-- 20
                                       Function -->> New Execution phase is created
                                                       NEW VARIABLE ENVIRONMENT + NEW EXECUTION THREAD
                                                           --> BOTH memory and exceution phase will execute again for funtion
                                                           num1 <-- undefined        |     num1 <--10
                                                           num2 <-- undefined        |     num2 <--20
                                                           total <-- undefined       |     total <--30
                                                                   TOTAL WILL RETURN TO THE GLOBAL EC
                                        Function GLobal EC will be deleted after returning the value to the Global EC
            

            CALL STACK will work on the concept of LIFO 


*/