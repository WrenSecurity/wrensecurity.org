---
title: Wren:AM 16.0.0-M1 Released
date: 2025-09-16
excerpt: |
  New milestone release Wren:AM 16.0.0-M1 has been published.
sidebar: false
---

<Post>

We are excited to announce the milestone release of [Wren:AM 16.0.0-M1](https://github.com/WrenSecurity/wrenam/releases/tag/16.0.0-M1).

The most significant change is the migration to Jakarta Servlet 5.0 and the upgrade to Tomcat 10, ensuring future compatibility and improved performance.
This marks a major step forward for the project, serving as preparation for a full migration to the Jakarta EE specification.

## Changes

List of other significant changes:

* Switch from `sun.security.x509` to Bouncy Castle API
* Add JSON debug log format and JSON handler to audit logging
* Update `wrensec-commons` to 23.0.0-M1
* Upgrade SLF4J to 2.x

Review all the changes on [GitHub](https://github.com/WrenSecurity/wrenam/releases/16.0.0-M1).

## How to get

Refer to the [Getting Started](https://docs.wrensecurity.org/wrenam/latest/getting-started.html) page to learn how to get and run Wren:AM.

Alternatively you can run the official Docker image from [Docker Hub](https://hub.docker.com/r/wrensecurity/wrenam):

```bash
docker run --rm --name wrenam-test -p 8080:8080 wrensecurity/wrenam:16.0.0-M1
```

</Post>
