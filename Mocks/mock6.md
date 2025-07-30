## HCIA SECURITY Mock Exam 6

1. Which of the following is the correct description of windows log event type? (Multiple Choice)

    A. A warning event is a successful operation event of an application, driver, or service.  
    B. Error events usually refer to the loss of function and data. For example, if a service cannot be loaded as a system boot, an error event will be generated.  
    C. When the disk space is insufficient, it will be recorded as an "information event"  
    D. Failure audit event refers to a failed audit security login attempt, such as a failure when the user views accesses the network drive is logged as a failed audit event.  

<details>
<summary>Show Answer</summary>
**Correct answer:** BCD

**Explanation:** Error events (B) indicate loss of function or data, information events (C) record system status including disk space issues, and failure audit events (D) log failed security attempts. Warning events are NOT successful operations - they indicate potential problems that may lead to future issues.
</details>

2. Which types of encryption technology can be divided into? (Multiple Choice)

    A. Symmetric encryption  
    B. Asymmetric encryption  
    C. Fingerprint encryption  
    D. Data encryption  

<details>
<summary>Show Answer</summary>
**Correct answer:** AB

**Explanation:** Encryption technology is fundamentally divided into two main types: symmetric encryption (where the same key is used for both encryption and decryption) and asymmetric encryption (where different keys are used for encryption and decryption). Fingerprint encryption and data encryption are not standard classification categories.
</details>

3. HRP (Huawei Redundancy Protocol) Protocol to back up the connection state of data include: (Multiple Choice)

    A. TCP/UDP sessions table  
    B. Server Map table  
    C. the dynamic blacklist  
    D. the routing table  

<details>
<summary>Show Answer</summary>
**Correct answer:** ABC

**Explanation:** HRP backs up session tables for TCP/UDP connections, server map tables for NAT translations, and dynamic blacklists for security. The routing table is not backed up by HRP as it's managed by routing protocols.
</details>

4. Which of the following is the core part of the P2DR model?

    A. Policy Strategy  
    B. Protection  
    C. Detection  
    D. Response  

<details>
<summary>Show Answer</summary>
**Correct answer:** A

**Explanation:** Policy (Strategy) is the core of the P2DR model as it defines the security objectives and guides all other components. Protection, Detection, and Response are all implemented based on the established security policies.
</details>

5. Evidence identification needs to resolve the integrity verification of the evidence and determine whether it meets the applicable standards. Which of the following statements is correct about the standard of evidence identification?

    A. Relevance criterion means that if the electronic evidence can have a substantial impact on the facts of the case to a certain extent, the court should determine that it is relevant.  
    B. Objective standard means that the acquisition, storage, and submission of electronic evidence should be legal, and the basic rights such as national interests, social welfare, and personal privacy are not strictly violated  
    C. Legality standard is to ensure that the electronic evidence is collected from the initial collection, and there is no change in the content of the evidence submitted as evidence.  
    D. Fairness standard refers to the evidence obtained by the legal subject through legal means, which has the evidence ability.  

<details>
<summary>Show Answer</summary>
**Correct answer:** A

**Explanation:** The relevance criterion correctly states that electronic evidence must have substantial impact on the case facts to be considered relevant. The other options incorrectly describe the standards - objective standard relates to factual accuracy, legality standard concerns lawful collection methods, and fairness standard involves proper procedural adherence.
</details>

6. Data analysis technology is to find and match keywords or key phrases in the acquired data stream or information flow, and analyze the correlation of time. Which of the following is not an evidence analysis technique?

    A. Password deciphering, data decryption technology  
    B. Document Digital Abstract Analysis Technology  
    C. Techniques for discovering the connections between different evidences  
    D. Spam tracking technology  

<details>
<summary>Show Answer</summary>
**Correct answer:** D

**Explanation:** Spam tracking technology is primarily used for email security and filtering, not for evidence analysis in digital forensics. Password deciphering, digital abstract analysis, and correlation techniques are all legitimate evidence analysis methods.
</details>

7. Regarding the AH and ESP security protocols, which of the following options is correct? (Multiple Choice)

    A. AH can provide encryption and verification functions  
    B. ESP can provide encryption and verification functions  
    C. The agreement number of AH is 51.  
    D. The agreement number of ESP is 51.  

<details>
<summary>Show Answer</summary>
**Correct answer:** BC

**Explanation:** ESP (Encapsulating Security Payload) provides both encryption and authentication, and AH (Authentication Header) protocol number is 51. AH only provides authentication/integrity, not encryption. ESP protocol number is 50, not 51.
</details>

8. Which of the following types of attacks does the DDoS attack belong to?

    A. Snooping scanning attack  
    B. Malformed packet attack  
    C. Special message attack  
    D. Traffic attack  

<details>
<summary>Show Answer</summary>
**Correct answer:** D

**Explanation:** DDoS (Distributed Denial of Service) attacks overwhelm target systems with massive volumes of traffic from multiple sources, making them traffic-based attacks designed to exhaust system resources and deny service to legitimate users.
</details>

9. Regarding SSL VPN technology, which of the following options is wrong?

    A. SSL VPN technology can be perfectly applied to NAT traversal scenarios  
    B. SSL VPN technology encryption only takes effect on the application layer  
    C. SSL VPN requires a dial-up client  
    D. SSL VPN technology extends the network scope of the enterprise  

<details>
<summary>Show Answer</summary>
**Correct answer:** C

**Explanation:** SSL VPN does NOT require a dial-up client - one of its main advantages is clientless access through web browsers. SSL VPN works well with NAT, operates at the application layer, and does extend enterprise network scope.
</details>

10. Which of the following options can be used in the advanced settings of windows firewall? (Multiple Choice)

    A. Restore defaults  
    B. Change notification rules  
    C. Set connection security rules  
    D. Set outbound/inbound rules  

<details>
<summary>Show Answer</summary>
**Correct answer:** ABCD

**Explanation:** Windows Firewall advanced settings include all these options: restoring to default configuration, modifying notification settings, configuring connection security rules for IPSec, and setting both inbound and outbound traffic rules.
</details>

11. When configuring NAT Server on the LSG series firewall, the server-map table will be generated. Which of the following does not belong in the table?

    A. Destination IP  
    B. Destination port  
    C. Agreement number  
    D. Source IP  

<details>
<summary>Show Answer</summary>
**Correct answer:** D

**Explanation:** The server-map table for NAT Server contains destination IP, destination port, and protocol number (agreement number) to map external requests to internal servers. Source IP is not stored in the server-map table as it varies with each client request.
</details>

12. Which of the following attacks does not belong to special packet attack?

    A. ICMP redirect packet attack  
    B. ICMP unreachable packet attack  
    C. IP address scanning attack  
    D. Large ICMP packet attack  

<details>
<summary>Show Answer</summary>
**Correct answer:** C

**Explanation:** IP address scanning attack is a reconnaissance/scanning attack, not a special packet attack. Special packet attacks involve crafted packets with unusual characteristics like ICMP redirects, unreachable messages, and oversized ICMP packets.
</details>

13. Which of the following attacks is not a malformed message attack?

    A. Teardrop attack  
    B. Smurf attack  
    C. TCP fragment attack  
    D. ICMP unreachable packet attack  

<details>
<summary>Show Answer</summary>
**Correct answer:** D

**Explanation:** ICMP unreachable packet attack is a special packet attack, not a malformed message attack. Teardrop, Smurf, and TCP fragment attacks all involve sending malformed or crafted packets with invalid structures or parameters.
</details>

14. Caesar Code is primarily used to encrypt data by using a stick of a specific specification.

    **True**  
    **False**  

<details>
<summary>Show Answer</summary>
**Correct answer:** False

**Explanation:** Caesar cipher is a simple substitution cipher that shifts letters by a fixed number of positions in the alphabet. It does not use any physical device or "stick of specific specification" - it's a mathematical character shifting method.
</details>

15. Typical remote authentication modes are: (Multiple Choice)

    A. RADIUS  
    B. Local  
    C. HWTACACS  
    D. LDP  

<details>
<summary>Show Answer</summary>
**Correct answer:** AC

**Explanation:** RADIUS and HWTACACS are remote authentication protocols that communicate with external authentication servers. Local authentication is performed on the device itself (not remote), and LDP is a label distribution protocol, not an authentication method.
</details>

16. When the firewall hard disk is in place, which of the following is correct description for the firewall log?

    A. The administrator can advertise the content log to view the detection and defense records of network threats.  
    B. The administrator can use the threat log to understand the user's security risk behavior and the reason for being alarmed or blocked.  
    C. The administrator knows the user's behavior, the keywords explored, and the effectiveness of the audit policy configuration through the user activity log.  
    D. The administrator can learn the security policy of the traffic hit through the policy hit log. And use it for fault location when the problem occurs.  

<details>
<summary>Show Answer</summary>
**Correct answer:** D

**Explanation:** Policy hit logs show which security policies were matched by network traffic, helping administrators understand traffic patterns and troubleshoot network issues. The other log descriptions contain inaccuracies in their stated purposes.
</details>

17. In the Client-Initiated VPN configuration, generally it is recommended to plan the address pool and the headquarters or need to of the network address for the different network or need to open proxy forwarding on the gateway device.

    **True**  
    **False**  

<details>
<summary>Show Answer</summary>
**Correct answer:** True

**Explanation:** In Client-Initiated VPN, proper address pool planning is essential to avoid IP conflicts between remote clients and headquarters network. Proxy forwarding may be needed on gateway devices to enable communication between different network segments.
</details>

18. Which of the following is the encryption technology used by digital envelopes?

    A. Symmetric encryption algorithm  
    B. Asymmetric encryption algorithm  

<details>
<summary>Show Answer</summary>
**Correct answer:** B

**Explanation:** Digital envelopes use asymmetric encryption to encrypt the symmetric key, which is then used to encrypt the actual data. This combines the security of asymmetric encryption with the efficiency of symmetric encryption.
</details>

19. Except built-in Portal authentication, firewall also supports custom Portal authentication, when using a custom Portal authentication, no need to deploy a separate external Portal server.

    **True**  
    **False**  

<details>
<summary>Show Answer</summary>
**Correct answer:** False

**Explanation:** When using custom Portal authentication, you DO need to deploy a separate external Portal server. Custom Portal authentication requires external infrastructure to handle the authentication web pages and processes.
</details>

20. NAPT technology can implement a public network IP address for multiple private network hosts.

    **True**  
    **False**  

<details>
<summary>Show Answer</summary>
**Correct answer:** True

**Explanation:** NAPT (Network Address Port Translation) allows multiple private network hosts to share a single public IP address by using different port numbers to distinguish between connections from different internal hosts.
</details>

21. IPSec VPN technology does not support NAT traversal when encapsulating with ESP security protocol, because ESP encrypts the packet header.

    **True**  
    **False**  

<details>
<summary>Show Answer</summary>
**Correct answer:** False

**Explanation:** IPSec VPN can support NAT traversal with ESP through NAT-T (NAT Traversal) techniques, which encapsulate ESP packets in UDP to work through NAT devices. ESP encrypts the payload, not the entire packet header.
</details>

22. Which of the following is true about the description of SSL VPN?

    A. Can be used without a client  
    B. May encrypt to IP layer  
    C. There is a NAT traversal problem  
    D. No authentication required  

<details>
<summary>Show Answer</summary>
**Correct answer:** A

**Explanation:** SSL VPN can operate clientless through web browsers, making it one of its key advantages. SSL VPN operates at the application layer (not IP layer), works well through NAT, and requires authentication for security.
</details>

23. Some applications, such as Oracle database application, there is no data transfer for a long time, so that firewall session connection is interrupted, thus resulting in service interruption, which of the following technology can solve this problem?

    A. Configure a long business connection  
    B. Configure default session aging time  
    C. Optimization of packet filtering rules  
    D. Turn fragment cache  

<details>
<summary>Show Answer</summary>
**Correct answer:** A

**Explanation:** Configuring long business connections (persistent connections) maintains sessions for applications that have long idle periods, preventing premature session timeout that would interrupt database connections.
</details>

24. What is the nature of information security in "Implementation of security monitoring and management of information and information systems to prevent the illegal use of information and information systems"?

    A. Confidentiality  
    B. Controllability  
    C. Non-repudiation  
    D. Integrity  

<details>
<summary>Show Answer</summary>
**Correct answer:** B

**Explanation:** Controllability refers to preventing illegal or unauthorized use of information systems through monitoring and management controls. This ensures that access and usage remain within authorized boundaries.
</details>

25. When configuring security policy, a security policy can reference an address set or configure multiple destination IP addresses.

    **True**  
    **False**  

<details>
<summary>Show Answer</summary>
**Correct answer:** True

**Explanation:** Security policies can reference address objects/sets that contain multiple IP addresses, or directly configure multiple destination IP addresses within a single policy rule for flexibility and efficiency.
</details>

26. Which of the following options is not the part of the quintuple?

    A. Source IP  
    B. Source MAC  
    C. Destination IP  
    D. Destination Port  

<details>
<summary>Show Answer</summary>
**Correct answer:** B

**Explanation:** The quintuple consists of: Source IP, Destination IP, Source Port, Destination Port, and Protocol. Source MAC address is a Layer 2 identifier and is not part of the Layer 3/4 quintuple used for session identification.
</details>

27. Which of the following statement about the L2TP VPN of Client-initialized is wrong?

    A. After the remote user access to internet, can initiate L2TP tunneling request to the remote LNS directly through the client software  
    B. LNS device receives user L2TP connection request, can verify based on user name and password.  
    C. LNS assign a private IP address for remote users  
    D. remote users do not need to install VPN client software  

<details>
<summary>Show Answer</summary>
**Correct answer:** D

**Explanation:** Remote users DO need to install VPN client software for Client-Initiated L2TP VPN. The client software is required to establish the L2TP tunnel and handle the connection to the LNS (L2TP Network Server).
</details>

28. Regarding the description of the vulnerability scanning, which of the following is wrong?

    A. Vulnerability scanning is a technology based on network remote monitoring of target network or host security performance vulnerability, which can be used for simulated attack experiments and security audits.  
    B. Vulnerability scanning is used to detect whether there is a vulnerability in the target host system. Generally, the target host is scanned for specific vulnerabilities.  
    C. Vulnerability scanning is a passive preventive measure that can effectively avoid hacker attacks.  
    D. Vulnerability scanning can be done based on the results of ping scan results and port scan  

<details>
<summary>Show Answer</summary>
**Correct answer:** C

**Explanation:** Vulnerability scanning is NOT a passive preventive measure that can effectively avoid hacker attacks. It is an active assessment tool that identifies vulnerabilities but does not prevent attacks by itself - remediation actions are needed after vulnerabilities are discovered.
</details>

29. Regarding the firewall security policy, which of the following options is wrong?

    A. If the security policy is permit, the discarded message will not accumulate the number of hits.  
    B. When configuring the security policy name, you cannot reuse the same name  
    C. Adjust the order of security policies with immediate effect, no need to save the configuration file.  
    D. Huawei's USG series firewalls cannot have more than 128 security policy entries.  

<details>
<summary>Show Answer</summary>
**Correct answer:** A

**Explanation:** If the security policy action is permit, discarded messages (those that don't match the policy conditions) WILL still accumulate hit counts for monitoring and troubleshooting purposes. Policy hit counters track both matched and unmatched traffic.
</details>

30. Which of the following protection levels are included in the TCSEC standard? (Multiple Choice)

    A. Verify protection level  
    B. Forced protection level  
    C. Independent protection level  
    D. Passive protection level  

<details>
<summary>Show Answer</summary>
**Correct answer:** ABC

**Explanation:** TCSEC (Trusted Computer System Evaluation Criteria) includes Verified Protection (Class A), Mandatory Protection (Class B), and Discretionary Protection (Class C). "Passive protection level" is not a TCSEC classification.
</details>

---

This guide provides a comprehensive set of HCIA Security questions and answers to help you prepare for your certification exam. Good luck with your studies!
