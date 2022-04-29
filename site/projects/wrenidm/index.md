---
title: Wren:IDM
sidebarDepth: 2
---


# Wren:IDM

## Overview

Wren:IDM is a community‐developed identity management system with a flexible data model, multiple extension points
and scripting support, including JavaScript and Groovy. It can connect to and manage a wide range of systems through
the Identity Connector Framework (Wren:ICF).

Wren:IDM is one of the projects in the Wren Security Suite, a community initiative that adopted open‐source projects
formerly developed by ForgeRock, which has its own roots in Sun Microsystems’ products.

Wren:IDM itself is focused on identity management processes and it also provides a powerful framework for implementing
IAG and a portion of IAM processes as well. Although the project is based on OpenIDM code, it is not affiliated with
ForgeRock in any way. It is based on the very latest code available under a CDDL license (not‐yet‐released OpenIDM 5.x).

The features of Wren:IDM include:

  * A complete platform for building IDM and IG solutions using the concepts described below – roles, mappings,
  synchronizations, workflows, policies, etc.
  * ICF Connector Servers – services that allow connectors to be run outside of the IDM itself. Useful when a connector
  needs a specific client environment to talk to the integrated system. Also facilitates security. .NET and Java Connector
  Servers are available.
  * Administration GUI – an interface for making changes to data models and configuration using a point‐and‐click
  interface rather than Wren:IDM's REST interface.
  * Self‐service GUI – an interface for end‐users to update their profile information, passwords, and preferences.

Both the Administration GUI and Self‐Service GUI are web‐based, single‐page applications that can be turned off in
deployments that do not desire to use them [[1]](#bibliogprahy).

## Acknowledgments

Large portions of the source code are based on the open-source projects
previously released by:
* Sun Microsystems
* ForgeRock

We'd like to thank them for supporting the idea of open-source software.


## Disclaimer

Please note that the acknowledged parties are not affiliated with this project.
Their trade names, product names and trademarks should not be used to refer to
the Wren Security products, as it might be considered an unfair commercial
practice.

Wren Security is open source and always will be.
