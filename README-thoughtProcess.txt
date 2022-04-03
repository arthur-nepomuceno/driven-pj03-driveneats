02/03/22

========================================================================
=== 01 - Developing the BUTTON CHANGE at the SELECT of the OPTIONS. ===
========================================================================

01.0 - What do I want to happen now?
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

01.1 How do I want it to happen?
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
=== 02 - Developing the FINISH ORDER function. ===
===================================================

02.0 What do I want to happen now?
R:
    I want a function that works only when the order button is clicked.
    It needs to get the choises' names and prices.Then organize it in a 
    particular format to be sent to the user.

02.1 How do I want it to happen?
R:
    - First I need to get the choises infos.
    - Then I need to insert it inside the official message.

02.2 What do I want to happen now?
R:
    I want the message to be sent to the whastapp of the restaurant.

02.3 How do I want it to happen?
R:
    -  By linking the order button with a link to the whatsapp of the
    restaurant.
    - By adding the message it.

====================================================
=== 03 - Developing the CONFIRM ORDER function. ===
====================================================

03.0 What do I want to happen now?
R:
    I want that after the user informs it's name and address,
    tha code displays a confirm order screen, wich must show:
        - a title
        - meal & it's price
        - drink & it's price
        - dessert & it's price
        - user's name
        - user's address
        - confirm button
        - cancel button

03.1 How am I making this happen?
R:
    By builting a <div> with all these aspects inside.
    It should remain undisplayed until right after the
    prompts for name and address are displayed on the screen.

    1. Build the <div> and set display: none
    2. Build it's inners parts
    3. Grab it's inner parts through javascript
    4. Manipulate it's inner HTMLs to show  the results of the choises made
    plus name and address infos.


