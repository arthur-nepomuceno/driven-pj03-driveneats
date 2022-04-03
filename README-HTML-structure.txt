This is a document to serve as a guideline for explaining
how the HTML content is organized.

The goal is for me to easily remember the on going of the project
and to clearly visualize how I organized the hierarchy.

=========================================================================
Let's start!
=========================================================================

GENERAL OVERVIEW

.cover (display:none)

.confirm-order (display:none)

.top-bar

.page-content
    .menu-title
    .menu-options
        .option

.bottom-bar

=========================================================================

EXTENDED OVERVIEW

.cover (display:none)

.confirm-order (display:none)
    .confirm-title
    .meal choice
        meal name
        meal price
    .drink choice
        drink name
        drink price
    .dessert choice
        dessert name
        dessert price
    .user-data
        user name
        user addres
    confirm button
    cancel button

.top-bar
    .top-title
    .top-subtitle

.page-content
    .menu-title
    .menu-options
        .option
            .option-image
            .option-title
            .option-description
            .option-price

.bottom-bar
    .order-button
