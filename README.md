# SQL - 11

**PREVIOUSLY**
- ORM

**TODAY**
- Cyber security
- XSS/JS Injections
## Cyber security

- Cyber security is a **MASSIVE** and **extremely complex** topic
- It's the most complex topic in the field of IT
- During this submodule we will only _barely_ scratch the surface

- There are also many related concepts that are not strictly cyber security
    - For example, social engineering is not always considered cyber security
    - But it's definitely strongly related

- Cyber security relates to basically everything
    - We have already talked about some aspects of cyber security
    - Cookies, JWTs
    - HTTPS / SSL
    - Encryption, hashing, cracking
    - etc.

- Today, let's explore a new topic

## XSS/JS Injections

- XSS: Cross Site Scripting
- XSS is a class of security vulnerabilities
    - XSS vulnerabilities allow attackers to _inject malicious scripts into pages_
    - When a user visits the page, the malicious script is executed


- [Live coding](./example)

- Now anyone that visits the page will run our malicious script
- This is a simple example, but it can be used to steal cookies, passwords, etc.
- Imagine if you could add stuff like that to your GitHub profile page
- It would be incredibly annoying to visitors
- Also, someone could do API requests on your behalf, like change your password

- ((GitHub actually has layers of security against this, it's just an example))

![GitHub](https://img.shields.io/badge/GitHub-fff?logo=github&logoColor=black)
![Postgres](https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql&logoColor=white)

- The two basic defenses against XSS are
    - Validate inputs (Never trust user input)
    - Encode outputs

## Input validation

- Two main types of input validation
    - **Allowlist**
        - Only allow certain characters
        - For example, only allow alphanumerics, spaces, comma and period
        - "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ,."
    - **Denylist**
        - Disallow certain characters
        - For example, disallow `<` and `>`

- Terminology: traditionally the terms "_blacklist_" and "_whitelist_" were used
    - These terms are being phased out

- Allowlisting is generally considered more secure
    - It's easier to miss something in a denylist
    - It's easier to accidentally allow something in a denylist

## Output encoding

- When you output data to the user, you should encode it
- This means that you should convert special characters to their HTML entities
    - For example, `<` becomes `&lt;`
    - This way, the browser will display the character, but not execute it

- Encoding is a frontend technique
- Validation is a backend technique
    - Frontend validation is for user experience
    - Backend validation is for security


## Validation in Sequelize

- You can actually add validation directly into your Sequelize models

- 15 minute mini exercise
    - Read https://sequelize.org/docs/v6/core-concepts/validations-and-constraints


## Wrap-up

- XSS is a class of cyber security vulnerabilities
- Basic XSS defenses are input validation and output encoding
- Sequelize models can have built-in validation

## Exercises

- https://classroom.github.com/a/CjVTVdEY

## Self-study prompts

- https://darknetdiaries.com/episode/61/
