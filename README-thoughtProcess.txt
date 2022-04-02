02/03/22

========================================================================
=== 001 - Developing the BUTTON CHANGE at the SELECT of the OPTIONS. ===
========================================================================

001.0 - What do I want to happen now?
R:
    I want the order button to be:
        - disabled
        - uncolored
        - and with a specific message in it.

        UNLESS the three options on the menu are chosen.
        In this case, I want it to be:
        - abled
        - colored with a gree background
        - and with another specific message in it.

001.1 How do I want it to happen?
R:
    Through a function that:
            - adds the class .release to change de background color to green
            - changed the innerHTML of the button to "Fechar pedido"
            - changes the "disabled" attribute of the button.

            BUT IF ANY OF THE MENU OPTIONS ARE NOT SELECTED
            - it removes the class .release, causing the button to be uncolored again
            - it changes back de innerHTML to the previous text
            - it changes the "disabled" attribute back again

        At last, I call the function every time an option is clicked.
        How?
            - by calling it at the end of each selectOption type of function.

===================================================
=== 002 - Developing the FINISH ORDER function. ===
===================================================

002.0 What do I want to happen now?
R:
    I want a function that works only when the order button is clicked.
    It needs to get the choises' names and prices.Then organize it in a 
    particular format to be sent to the user.

002.1 How do I want it to happen?
R:
    - First I need to get the choises infos.
    - Then I need to insert it inside the official message.

002.2 What do I want to happen now?
R:
    I want the message to be sent to the whastapp of the restaurant.

002.3 How do I want it to happen?
R:
    -  By linking the order button with a link to the whatsapp of 
    restaurant.
    - By adding the message it.



