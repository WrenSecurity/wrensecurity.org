---
title: Wren:ICF
sidebarDepth: 2
---

# Wren:ICF

## Overview

Wren:ICF is an umbrella brand encompassing community-developed _Identity Connector Framework_ as well as a set of
production-ready connectors – LDAP, Office 365, SSH, SQL, PowerShell, REST and many more.

The main project is [_Wren:ICF Java Framework_](https://github.com/WrenSecurity/wrenicf-java-framework) where the
various parts of the framework (specification, APIs, SPIs and network protocol) are forged, and it also provides the
default connector runtime environment for the Java world.

[_Wren:ICF .NET Framework_](https://github.com/WrenSecurity/wrenicf-dotnet-framework) is a connector framework
implementation and runtime environment for Microsoft's .NET world.


## Framework Features

Wren:ICF addresses the following topics:

* connector specification – definition of connector interfaces and available operations
* connector runtime environment – Java and .NET server implementations managing individual connectors,
  their discoverability and lifecycle (e.g. pooling)
* remote connector protocol – low-level remote connector network protocol

Runtime environment manages individual connectors through connector SPI methods and offers their functionality
through public API. Each connector works with a specific set of objects (e.g. _accounts_ and _groups_) defined by
self-described schema, and can implement one or more well [defined operations](https://github.com/WrenSecurity/wrenicf-java-framework/tree/master/framework-core/src/main/java/org/identityconnectors/framework/spi/operations).


## Identity Connectors

Wren:ICF provides a set of common basic connectors and scriptable connectors with sample integrations:

* LDAP Connector – integration with LDAP server (e.g. Active Directory)
* CSV File Connector – reading and writing rows from a CSV file
* Scriptable SSH Connector – custom remote shell invocations through managed JSch connection
* Scriptable SQL Connector – custom database commands through managed JDBC connection
* Scriptable REST Connector – custom calls through managed HTTP connection
* Scriptable Groovy Connector – custom groovy scripts for Wren:ICF operations
* Scriptable PowerShell Connector – custom PowerShell scripts for Wren:ICF operations

Many other connectors are available under [Wren Security's GitHub](https://github.com/WrenSecurity) organization
or by third-party vendors.


## Acknowledgments

Wren:ICF is standing on the shoulders of giants and is a continuation of a prior work:

* Sun Identity Framework by Sun Microsystems
* OpenICF by ForgeRock AS

We'd like to thank them for supporting the idea of open-source software.


## Disclaimer

Please note that the acknowledged parties are not affiliated with this project. Their trade names, product names
and trademarks should not be used to refer to the Wren Security products, as it might be considered an unfair
commercial practice.

Wren Security is open source and always will be.
