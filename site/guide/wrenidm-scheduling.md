---
title: Scheduling Operations With Wren:IDM
date: 2024-05-14
excerpt: |
  Explore scheduling in our series of blog posts introducing crucial features of Wren:IDM.
project: Wren:IDM
sidebar: false
---

<Post>

The effective management of identities, access, and permissions often relies on regular activities. This makes scheduling a crucial feature of every identity management platform. This article focuses on how to utilize scheduling to your advantage.

Setting up a scheduler ensures consistent execution of various operations at a specific time. These operations can include regular synchronization, monthly auditing and reporting, script launching, or recalculating attributes of certain managed objects. This approach minimizes the chance of human error, boosts efficiency, and also enables system optimization by arranging operations during off-peak hours.

Let's illustrate two basic use-case scenarios with practical examples:

- Scripted Message Printing Every 15 Seconds
- Employee Synchronization from Source System (e.g., CSV file in this sample case)

1. Start by cloning the Wren:IDM cookbook with Docker and Git being the prerequisites for this example:  https://github.com/WrenSecurity/wrenidm-cookbook
2. Navigate to the ‘scheduler’ sample folder, and spin up the prepared Docker containers using:
```bash
docker compose up -d
```
3. First, focus on welcome messages that will be printed to the standard output of a Docker container every 15 seconds.
4. Secondly, let's try out source system reconciliation.
   1. Go to admin user interface:
      https://localhost:8443/admin
   2. Log in using 'openidm-admin' as both the username and password.
   3. Navigate to the 'User' tab under the 'Manage' section and check for an existing managed user **Jon Snow**.
   4. Insert the following row into the source CSV file ( data/hr.csv ):
      **456,John,Doe,5554567**
   5. Please allow 15 seconds for the scheduler to update changes in Wren:IDM.
   6. Navigate back to the admin user interface.
   7. Check the newly created managed user **John Doe**.
5. When you’re done, feel free to continue exploring or remove the Docker containers using:
```bash
docker-compose stop && docker-compose rm -f
```

If you enjoyed this article, we'd be delighted if you tried other recipes from our cookbook or explore other [Wren Security tools](https://wrensecurity.org).


</Post>
