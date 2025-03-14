## Final exam in the portal

1. When firewalls are deployed in hot standby mode, which of the following protocols is used to switch the status of the entire VRRP group?

    A. VRRP  
    B. VGMP  
    C. ICMP  
    D. IGMP  

  <details>
  <summary>Show Answer</summary>
  **Correct answer:** B. VGMP 
  </details>

2. Which of the following statements is correct about the function of lateral movement in network penetration?

    A. An attacker obtains the IP address, domain name, active port, and communication information of the target network through scanning and network monitoring to lay a foundation for subsequent attacks.  
    B. After accessing the target system, the attacker cannot perform lateral movement due to a lack of privileges. Therefore, the attacker may try to elevate privileges.  
    C. Lateral movement is to penetrate other devices that may have vulnerabilities on the network through controlled hosts or servers.  
    D. Communicate with the customer to understand the target of the penetration test, such as the system, server, and IP address.  

  <details>
  <summary>Show Answer</summary>
  **Correct answer:** C. Lateral movement is to penetrate other devices that may have vulnerabilities on the network through controlled hosts or servers.
  </details>

3. Which of the following is a private IP address?

    A. 192.200.1.1  
    B. 172.32.1.1  
    C. 192.1.1.1  
    D. 172.20.2.1  

<details>
<summary>Show Answer</summary>
**Correct answer:** D. 172.20.2.1
    
***
Private IP ranges (not routable on the public internet):
- Class A: 10.0.0.0 to 10.255.255.255
- Class B: 172.16.0.0 to 172.31.255.255
- Class C: 192.168.0.0 to 192.168.255.255
***
</details>

4. Which of the following statements is correct about the characteristics of a DDoS attack?

    A. An attacker intrudes into the target system through a backdoor program.  
    B. The purpose of such an attack is to steal confidential information from the target system.  
    C. The attack behavior can prevent the target system from processing the requests of authorized users.  
    D. If the target system has no vulnerability, the remote attack cannot succeed.  

<details>
<summary>Show Answer</summary>
**Correct answer:** C. The attack behavior can prevent the target system from processing the requests of authorized users.
</details>

5. Network penetration simulates hackers' intrusion behaviors and thought patterns to perform non-destructive security tests on customer systems. Which of the following is the correct sequence of the network penetration process?

    A. Confirm the target -> Collect information -> Implement penetration -> Perform lateral movement -> Elevate privileges -> Clear traces  
    B. Collect information -> Confirm the target -> Implement penetration -> Perform lateral movement -> Elevate privileges -> Clear traces  
    C. Confirm the target -> Collect information -> Perform lateral movement -> Implement penetration -> Elevate privileges -> Clear traces  
    D. Confirm the target -> Collect information -> Implement penetration -> Perform lateral movement -> Clear traces -> Elevate privileges  

<details>
<summary>Show Answer</summary>
**Correct answer:** A. Confirm the target -> Collect information -> Implement penetration -> Perform lateral movement -> Elevate privileges -> Clear traces
</details>

6. Which of the following statements is incorrect about TTL in IP packets?

    A. TTL is the maximum number of hops that an IP packet can be forwarded on a computer network.  
    B. The main function of TTL is to prevent IP packets from being circulated over a network infinitely, thereby saving network resources.  
    C. The TTL value decrements by 1 every time a packet is forwarded to a Layer 3 node.  
    D. The TTL value of a packet ranges from 0 to 4095.  

<details>
<summary>Show Answer</summary>
**Correct answer:** D. The TTL value of a packet ranges from 0 to 4095.
</details>

7. In tunnel mode of IPsec, to authenticate a new IP header, which of the following IPsec protocols needs to be used?

    A. MD5  
    B. SHA1  
    C. ESP  
    D. AH  

<details>
<summary>Show Answer</summary>
**Correct answer:** D. AH
</details>

8. Which of the following attacks is not a network-layer attack?

    A. Smurf attack  
    B. IP sweep  
    C. IP spoofing attack  
    D. Port scanning  

<details>
<summary>Show Answer</summary>
**Correct answer:** D. Port scanning
</details>

9. Which of the following statements is correct about a firewall's interzone security policies?

    A. Interzone security policies are matched sequentially from the one with the smallest ID.  
    B. Interzone security policies are matched sequentially from the top down.  
    C. Interzone security policies are matched sequentially from the one with the largest ID.  
    D. Interzone security policies are automatically sorted by ID. If the position of a policy changes, the ID of the policy changes accordingly.  

<details>
<summary>Show Answer</summary>
**Correct answer:** B. Interzone security policies are matched sequentially from the top down.
</details>

10. Which of the following statements is incorrect about the RADIUS protocol?

    A. By default, UDP is used, and the authentication and authorization port numbers are 1812 and 1813 or 1645 and 1646, respectively.  
    B. It encrypts only the password field in an authentication packet.  
    C. Authentication and authorization are processed together.  
    D. It supports authorization of configuration commands.  

<details>
<summary>Show Answer</summary>
**Correct answer:** D. It supports authorization of configuration commands.
</details>

11. Huawei Redundancy Protocol (HRP) is used to synchronize data such as the key configurations and connection status of the active firewall to the standby firewall. Which of the following data is beyond the synchronization scope?

    A. Routing table  
    B. Security policies  
    C. Blacklist  
    D. NAT policies  

<details>
<summary>Show Answer</summary>
**Correct answer:** A. Routing table
</details>

12. Which of the following messages can provide error information and IP packet processing information for source ends?

    A. IGMP  
    B. TCP  
    C. UDP  
    D. ICMP  

<details>
<summary>Show Answer</summary>
**Correct answer:** D. ICMP
</details>

13. If packet loss occurs when hosts A and B communicate with each other through TCP, how does TCP ensure reliability?

    A. Host B sends ICMP packets to host A to notify data loss.  
    B. The sliding window mechanism is used between the two hosts to ensure reliability.  
    C. Host B uses the ACK field to instruct host A to retransmit packets.  
    D. The Option field in TCP packets is used to ensure reliability of host A and host B.  

<details>
<summary>Show Answer</summary>
**Correct answer:** C. Host B uses the ACK field to instruct host A to retransmit packets.
</details>

14. Which one of the following parts is not included in a digital certificate?

    A. Name of the certificate holder  
    B. Certificate validity period  
    C. Certificate private key  
    D. Certificate public key  

<details>
<summary>Show Answer</summary>
**Correct answer:** C. Certificate private key
</details>

15. When an administrator wants to configure a USG series firewall through the console port, which of the following configurations should be made in Putty?

    A. 4800 bps, 8 data bits, 1 stop bit odd parity check, and no flow control  
    B. 9600 bps, 8 data bits, 1 stop bit, even parity check, and hardware-based flow control  
    C. 9600 bps, 8 data bits, 1 stop bit, no parity check, and no flow control  
    D. 19200 bps, 8 data bits, 1 stop bit, no parity check, and no flow control  

<details>
<summary>Show Answer</summary>
**Correct answer:** C. 9600 bps, 8 data bits, 1 stop bit, no parity check, and no flow control
</details>

16. On a USG firewall, which of the following commands is used to view current session entries?

    A. display firewall statistic  
    B. display firewall routing table  
    C. display firewall session table  
    D. display firewall fib session  

<details>
<summary>Show Answer</summary>
**Correct answer:** C. display firewall session table
</details>

17. Which of the following values is the default security level of the Trust zone on a Huawei USG firewall?

    A. 5  
    B. 50  
    C. 85  
    D. 100  

<details>
<summary>Show Answer</summary>
**Correct answer:** C. 85
</details>

18. Which of the following statements is correct about firewall security zones?

    A. The default security zones can be deleted from a firewall.  
    B. An interface on a firewall can belong to multiple security zones.  
    C. Different interfaces on a firewall can belong to the same security zone.  
    D. Different security zones can have the same security level.  

<details>
<summary>Show Answer</summary>
**Correct answer:** C. Different interfaces on a firewall can belong to the same security zone.
</details>

19. Which of the following steps is optional for configuring intrusion prevention?

    A. Creating an IPS profile  
    B. Configuring a signature filter  
    C. Configuring signature exceptions  
    D. Referencing an IPS profile in a security policy  

<details>
<summary>Show Answer</summary>
**Correct answer:** C. Configuring signature exceptions
</details>

20. Which of the following values is the default port number of the SSH protocol?

    A. 20  
    B. 21  
    C. 22  
    D. 23  

<details>
<summary>Show Answer</summary>
**Correct answer:** C. 22
</details>

21. The digital certificate technology addresses the problem from the digital signature technology that the owner of a public key cannot be determined. Which of the following are types of digital certificates?

    A. Self-signed certificate  
    B. CA certificate  
    C. Local certificate  
    D. Local device certificate  

<details>
<summary>Show Answer</summary>
**Correct answer:** ABCD
</details>

22. Which of the following ports are used as the default authentication and accounting ports of the RADIUS protocol?

    A. 1811  
    B. 1812  
    C. 1813  
    D. 1814  

<details>
<summary>Show Answer</summary>
**Correct answer:** BC
</details>

23. If the administrator has configured the Telnet service on the firewall but a user still cannot access the firewall remotely, which of the following are possible causes of the access failure?

    A. The network between the user and the firewall is unreachable.  
    B. The user enters an incorrect password.  
    C. The Telnet user level is incorrectly configured.  
    D. The number of online Telnet users reaches the upper limit.  

<details>
<summary>Show Answer</summary>
**Correct answer:** ABD
</details>

24. Which of the following methods can be used to implement the SSL VPN web proxy?

    A. Web link  
    B. Web transparent transmission  
    C. Web forwarding  
    D. Web rewriting  

<details>
<summary>Show Answer</summary>
**Correct answer:** AD
</details>

25. Which of the following are components of a PKI system?

    A. End entity  
    B. Certificate authority  
    C. Certificate registration authority  
    D. Certificate/CRL database  

<details>
<summary>Show Answer</summary>
**Correct answer:** ABCD
</details>

26. Which of the following security functions can be provided by the AH protocol in IPsec?

    A. Data origin authentication  
    B. Data confidentiality  
    C. Data integrity verification  
    D. Anti-replay  

<details>
<summary>Show Answer</summary>
**Correct answer:** ACD
</details>

27. Which of the following algorithms are symmetric encryption algorithms?

    A. DES  
    B. 3DES  
    C. MD5  
    D. SHA1  

<details>
<summary>Show Answer</summary>
**Correct answer:** AB
</details>

28. Which of the following are common network topologies?

    A. Bus topology  
    B. Tree topology  
    C. Star topology  
    D. Ring topology  

<details>
<summary>Show Answer</summary>
**Correct answer:** ABCD
</details>

29. Which of the following statements are correct about the decapsulation of data packets in the TCP/IP protocol stack?

    A. The physical network layer receives frames, calculates the CRC of the frames, and then sends the frames to the data link layer.  
    B. The data link layer checks whether the CRC of the frames is correct, deletes the frame header and CRC, and then sends the frames to the network layer.  
    C. After the network layer receives and parses data packets, network layer information is removed, and the upper-layer protocol is obtained based on the parsing result.  
    D. After the transport layer (TCP) receives and parses data packets, transport layer information is removed, and the upper-layer protocol is obtained based on the parsing result.  

<details>
<summary>Show Answer</summary>
**Correct answer:** ABCD
</details>

30. Which of the following VPNs are suitable for employees on business trips to access the enterprise intranet from the public network?

    A. L2TP VPN  
    B. GRE VPN  
    C. L2TP over IPsec  
    D. SSL VPN  

<details>
<summary>Show Answer</summary>
**Correct answer:** ACD
</details>

31. Which of the following principles must be adhered to when you configure the security levels of the firewall security zones?

    A. The security level cannot be changed once it is configured.  
    B. Two security zones in the same system cannot be configured with the same security level.  
    C. The default security level of a new security zone is 100.  
    D. Security levels can be set only for user-defined security zones.  

<details>
<summary>Show Answer</summary>
**Correct answer:** BD
</details>

32. Users are network access subjects and basic units for network behavior control and network permission assignment by firewalls. Which of the following are involved in the user organizational structure?

    A. Authentication domain  
    B. User group/User  
    C. Security group  
    D. Isolation group  

<details>
<summary>Show Answer</summary>
**Correct answer:** ABC
</details>

33. Which of the following TCP ports are used by the FTP service by default?

    A. 20  
    B. 21  
    C. 22  
    D. 23  

<details>
<summary>Show Answer</summary>
**Correct answer:** AB
</details>

34. Which of the following backup modes are supported by the HRP mechanism?

    A. Scheduled backup  
    B. Real-time backup  
    C. Batch backup  
    D. Quick backup  

<details>
<summary>Show Answer</summary>
**Correct answer:** BCD
</details>

35. Which of the following can be used to implement AAA on Huawei devices?

    A. RADIUS  
    B. HWTACACS  
    C. LDAP  
    D. AD  

<details>
<summary>Show Answer</summary>
**Correct answer:** ABCD
</details>

36. Which of the following VPNs are Layer 3 VPNs?

    A. L2TP VPN  
    B. GRE VPN  
    C. IPsec VPN  
    D. SSL VPN  

<details>
<summary>Show Answer</summary>
**Correct answer:** BC
</details>

37. Which of the following protocol technologies are used when firewalls are deployed in hot standby mode?

    A. VRRP  
    B. IGMP  
    C. VGMP  
    D. HRP  

<details>
<summary>Show Answer</summary>
**Correct answer:** ACD
</details>

38. Which of the following authentication modes are available for Internet access users?

    A. SSO  
    B. Built-in Portal authentication  
    C. User-defined Portal authentication  
    D. User authentication exemption  

<details>
<summary>Show Answer</summary>
**Correct answer:** ABCD
</details>

39. Which of the following parameters comprise an IPsec SA?

    A. SPI  
    B. Source IP address  
    C. Destination IP address  
    D. Security protocol number  

<details>
<summary>Show Answer</summary>
**Correct answer:** ACD
</details>

40. A session-based stateful inspection firewall processes the first packet and subsequent packets differently. Which of the following statements are correct?

    A. When receiving a packet, the firewall searches for a matching entry in the session table. If no match is found, the firewall processes the packet as the first packet.  
    B. When receiving a packet, the firewall searches for a matching entry in the session table. If a matching entry is found, the firewall processes the packet as a subsequent packet.  
    C. When stateful inspection is enabled, subsequent packets also need to be checked based on security policies.  
    D. When stateful inspection is enabled and the firewall processes TCP packets, a session can be established only for SYN packets.  

<details>
<summary>Show Answer</summary>
**Correct answer:** ABD
</details>

41. The web redirection password authentication function of a USG firewall enables a user to access services without being proactively authenticated, and the device pushes the authentication page to the user.  
**True**  
**False**  

<details>
<summary>Show Answer</summary>
**Correct answer:** True
</details>

42. In an IP sweep attack, an attacker sends ICMP packets to probe the IP address of the target network and obtain the topology of the target network and active devices.  
**True**  
**False**  

<details>
<summary>Show Answer</summary>
**Correct answer:** True
</details>

43. When a USG firewall serves as an out-of-path detection device, you need to configure the detection interface as a Layer 3 interface.  
**True**  
**False**  

<details>
<summary>Show Answer</summary>
**Correct answer:** False
</details>

44. The intrusion prevention function of the firewall detects and terminates intrusions (such as buffer overflow attacks, Trojan horses, and worms) in real time to protect enterprises' information systems and network architectures.  
**True**  
**False**  

<details>
<summary>Show Answer</summary>
**Correct answer:** True
</details>

45. During the ARP process, ARP reply packets are sent in broadcast mode. All hosts on the same Layer 2 network can receive these packets and learn the mapping between IP and MAC addresses.  
**True**  
**False**  

<details>
<summary>Show Answer</summary>
**Correct answer:** False
</details>

46. When the stateful inspection function is disabled, the firewall creates a session for subsequent packets.  
**True**  
**False**  

<details>
<summary>Show Answer</summary>
**Correct answer:** True
</details>

47. If the IKE negotiation mode of the IPsec VPN is the main mode, the ID type must be an IP address.  
**True**  
**False**  

<details>
<summary>Show Answer</summary>
**Correct answer:** True
</details>

48. With a large number of network users, large enterprises usually use a hierarchical structure to support network expansion and a growing number of users.  
**True**  
**False**  

<details>
<summary>Show Answer</summary>
**Correct answer:** True
</details>


49. The heartbeat link is a channel through which two firewalls exchange messages to learn about each other's status and back up configuration commands and entries. The MGMT interface can be used as the heartbeat interface.  
**True**  
**False**  

<details>
<summary>Show Answer</summary>
**Correct answer:** False
</details>


50. SSL is a security protocol that provides secure connections for TCP-based application layer protocols like HTTP.  
**True**  
**False**  

<details>
<summary>Show Answer</summary>
**Correct answer:** True
</details>


51. FTP is used for long-distance file transfer between two hosts and can ensure the reliability and confidentiality of data transmission.  
**True**  
**False**  

<details>
<summary>Show Answer</summary>
**Correct answer:** False
</details>

52. Huawei Redundancy Protocol (HRP) is used to synchronize information such as key configurations, connection status, routing tables, and interface addresses between the active and standby firewalls.  
**True**  
**False**  

<details>
<summary>Show Answer</summary>
**Correct answer:** False
</details>

53. On the CLI, users can view the running status and statistics in the user view, but not in the system view.  
**True**  
**False**  

<details>
<summary>Show Answer</summary>
**Correct answer:** False
</details>

54. After receiving a packet, the LNS checks whether the TCP destination port number is 1701. If so, the LNS sends the packet to the L2TP processing module for further processing. If not, the LNS processes the packet as a normal IP packet.  
**True**  
**False**  

<details>
<summary>Show Answer</summary>
**Correct answer:** True
</details>

55. A USG firewall is usually deployed between the external network and the network to be protected. It generates threat logs when detecting viruses, intrusions, botnets, Trojan horses, or worms.  
**True**  
**False**  

<details>
<summary>Show Answer</summary>
**Correct answer:** True
</details>

56. A network device searches the routing table according to the destination IP address field in the IP packet header, and then forwards the data based on the search result.  
**True**  
**False**  

<details>
<summary>Show Answer</summary>
**Correct answer:** True
</details>

57. IKEv1 negotiation phase 1 aims to establish an IKE SA, and supports two negotiation modes: main mode and aggressive mode.  
**True**  
**False**  

<details>
<summary>Show Answer</summary>
**Correct answer:** True
</details>

58. The persistent connection function of the firewall allows you to set a long aging time for specific TCP and UDP data flows, ensuring that the session information does not age out for a long time.  
**True**  
**False**  

<details>
<summary>Show Answer</summary>
**Correct answer:** True
</details>

59. NAT in Easy IP mode translates only private IP addresses. It cannot translate port numbers.  
**True**  
**False**  

<details>
<summary>Show Answer</summary>
**Correct answer:** False
</details>

60. Proactive preemption is a process in which the active firewall takes over services when it recovers from a fault. Proactive preemption is enabled by default.  
**True**  
**False**  

<details>
<summary>Show Answer</summary>
**Correct answer:** True
</details>


