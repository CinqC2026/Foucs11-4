import { useState } from "react";

const theme = {
  primary: "#1a5276", accent: "#2e86c1",
  success: "#1e8449", warn: "#c0392b", text: "#1c2833",
};
const S1="#1a5276", S2="#1d6a4a", S3="#6e2f8a", S4="#b7470a";

const screens = [
  { id:"intro", type:"intro",
    title:"Welcome to the Focus 11 Training", subtitle:"Our Operating Model",
    body:"This training will walk you through our operating model — the Focus 11 — which defines how we work to understand, engage, and support the Family Members and communities we serve. There are 11 components organised into 4 sections. We'll explore each one together.",
    cta:"Get Started" },
  // ── S1 ──
  { id:"s1", type:"section-header", section:"Section 1 of 4", title:"Deeply Understand", color:S1,
    body:"Before we can support anyone, we need to deeply understand who they are — both as a population and as individuals. This section covers the two foundational components that make that possible.", cta:"Start Section" },
  { id:"c1", type:"component", number:"Component 1", section:"Deeply Understand", sectionColor:S1,
    title:"Population Health View", icon:"🏘️",
    keyMessage:"We use data and community insight together to understand the population we serve.",
    points:[
      { label:"Risk Stratification", detail:"We use a predictive analytics model to stratify our population by risk — helping us prioritise resources and interventions where they're needed most." },
      { label:"Data Analysis", detail:"We analyse data across the population to identify trends, gaps, and opportunities to improve health outcomes at scale." },
      { label:"Community Insights", detail:"Data alone isn't enough. We pair it with on-the-ground community insights to understand the lived experience of the Family Members we serve — and we work in partnership with the community rather than managing them from the outside." },
    ],
    callout:"💡 Key Principle: Population-level understanding informs where and how we focus our energy — it's the foundation for everything that follows." },
  { id:"c2", type:"component", number:"Component 2", section:"Deeply Understand", sectionColor:S1,
    title:"Individualized 360 Member View", icon:"👤",
    keyMessage:"Every Family Member deserves to be seen as a whole person — not just a record.",
    points:[
      { label:"3,000+ Data Points & CINQIQ", detail:"We compile over 3,000 data points per individual, drawing on clinical, personal, and social information to build a complete picture of each Family Member. Much of this is reflected in CINQIQ — our proprietary tool — which brings together the rich data we hold on each person to inform how we engage and support them." },
      { label:"Data Sources", detail:"Information comes from multiple sources: CINQIQ, health information exchanges (HIE), practice-level clinical data, ADT feeds, claims data, and more — giving us a comprehensive, real-time view of each Family Member." },
      { label:"Clinical + Personal + Social → Draft Member Action Plan", detail:"We look beyond clinical data to understand the full person — their circumstances, social context, and personal history. This holistic view is used to develop a draft Member Action Plan: a personalised starting point for how to best meet that Family Member's needs and build genuine trust." },
    ],
    callout:"💡 Key Principle: The 360 view isn't about surveillance — it's about understanding each Family Member well enough to show up for them in a way that's meaningful to them." },
  { id:"q1", type:"quiz", title:"Knowledge Check – Deeply Understand",
    questions:[
      { q:"What do we combine with data analysis to form our Population Health View?", options:["Clinical records only","Community insights and partnership with the community","Claims data and ADT feeds","CINQIQ reports"], answer:1, explanation:"Data analysis is paired with community insights and a partnership approach — so we truly understand the population, not just the numbers." },
      { q:"What is CINQIQ?", options:["A national health information exchange","Our proprietary tool that brings together 3,000+ data points on each Family Member","A claims processing platform","A risk stratification algorithm"], answer:1, explanation:"CINQIQ is our proprietary tool — it brings together the rich data we hold on each Family Member to inform how we engage and support them." },
      { q:"What does the 360 Member View help us create for each individual?", options:["A final care plan","A risk score only","A draft Member Action Plan","A community health profile"], answer:2, explanation:"The rich data we compile is used to develop a draft Member Action Plan — a personalised starting point for how to best support that Family Member." },
    ]},
  // ── S2 ──
  { id:"s2", type:"section-header", section:"Section 2 of 4", title:"Engaging with Empathy", color:S2,
    body:"Engagement isn't just about making contact — it's about showing up in the right way, in the right places, and earning trust over time. This section covers three components that define how we engage with Family Members and communities.", cta:"Start Section" },
  { id:"c3", type:"component", number:"Component 3", section:"Engaging with Empathy", sectionColor:S2,
    title:"Presence: Community Engagement that Scales", icon:"🤝",
    keyMessage:"We don't just serve communities — we are embedded in them.",
    points:[
      { label:"From the Community, For the Community", detail:"Our employees often come from the communities they serve, bringing authentic knowledge, cultural understanding, and genuine connection." },
      { label:"Participating in Community Life", detail:"We show up at community events, build relationships with stakeholders, and become a familiar, trusted presence." },
      { label:"Community Insights", detail:"Being present in the community means we're continuously gathering real-world insight that informs how we engage with Family Members and where needs exist." },
      { label:"Digital Presence & Outreach", detail:"We also use digital channels and mailers to ensure Family Members are broadly aware of who we are before deeper engagement begins." },
    ],
    callout:"💡 Key Principle: Presence is about awareness and familiarity at scale. Family Members are more likely to trust and engage with us when they already know who we are." },
  { id:"c4", type:"component", number:"Component 4", section:"Engaging with Empathy", sectionColor:S2,
    title:"Activation", icon:"🔍",
    keyMessage:"We keep activating until we've found, reached, and begun to connect every Family Member to what they need.",
    points:[
      { label:"Locating Hard-to-Reach Family Members", detail:"Using the rich data from the 360 Member View, we work to locate Family Members who may be difficult to reach — so no one falls through the cracks." },
      { label:"Building Trust and Reaching Family Members", detail:"Finding someone is only the first step. Activation is also about truly reaching them — establishing a connection built on trust and genuine relationship." },
      { label:"Understanding Goals and Ecosystem", detail:"We start to understand what matters to the Family Member: their personal goals, their caregiver, how they navigate the world, and who is important in their life." },
      { label:"Identifying Social Needs", detail:"We listen for social needs and the things that really matter to them — because meeting a Family Member where they are, on their terms, is how trust is built." },
      { label:"Connecting to Resources and Care", detail:"Activation also means making that first meaningful connection — to clinical team members, circles of care, a case manager, an AWV, or whatever the Family Member needs." },
    ],
    callout:"💡 Key Principle: Activation is persistent and person-centred. We don't stop at contact — we keep going until we've established a real relationship and connected the Family Member to the support they need." },
  { id:"c5", type:"component", number:"Component 5", section:"Engaging with Empathy", sectionColor:S2,
    title:"Ongoing Care", icon:"💬",
    keyMessage:"Ongoing care is about being a consistent, trusted presence — and being the Family Member's first call when something comes up.",
    points:[
      { label:"Regular, Rhythmic Touchpoints", detail:"Our Care Experience Specialists maintain an ongoing relationship with each Family Member — at minimum every two weeks. For some Family Members, depending on status and preference, approximately once a month." },
      { label:"Proactive Awareness", detail:"The ongoing relationship functions almost like a surveillance system in the best sense — consistently aware of a Family Member's wellbeing so we can act early, not reactively." },
      { label:"Earlier Identification of Needs", detail:"Because we're in regular contact, we identify emerging needs much sooner — clinical, social, or otherwise — and respond before things escalate." },
      { label:"Be Their First Call", detail:"Our ultimate goal is to be the person a Family Member calls first when something comes up with their health — and to help them navigate through the system." },
      { label:"Health Navigation, Social Barriers & Health Literacy", detail:"Ongoing care includes helping Family Members navigate the health system, closing social drivers of health, removing barriers, and building health literacy." },
    ],
    callout:"💡 Key Principle: Ongoing care is not a check-in — it's a relationship. The consistency of our presence is what earns trust and enables us to truly support Family Members over time." },
  { id:"q2", type:"quiz", title:"Knowledge Check – Engaging with Empathy",
    questions:[
      { q:"What makes our community Presence different from typical outreach?", options:["We only use digital channels","Our employees are often from the communities they serve and we are embedded in community life","We focus on high-risk Family Members only","We rely on clinical referrals"], answer:1, explanation:"Presence is about being genuinely embedded — our people often come from the community, we participate in events, and build awareness before deeper engagement begins." },
      { q:"What is the minimum frequency of touchpoints in Ongoing Care?", options:["Once a month for all Family Members","Weekly without exception","At least every two weeks, with flexibility based on Family Member preference and status","Only when a clinical need arises"], answer:2, explanation:"The minimum is at least every two weeks, though some Family Members may prefer around once a month. The regularity enables proactive awareness." },
      { q:"Which of the following is part of Activation?", options:["Maintaining weekly touchpoints with established Family Members","Conducting population-level data analysis","Connecting Family Members to clinical teams, case managers, or other resources for the first time","Closing social drivers of health over time"], answer:2, explanation:"Activation includes that critical first connection — to clinical team members, circles of care, a case manager, an AWV, or whatever the Family Member needs." },
    ]},
  // ── S3 ──
  { id:"s3", type:"section-header", section:"Section 3 of 4", title:"Circles of Care & Care Management", color:S3,
    body:"For our highest-need Family Members, we deploy a powerful model of integrated, high-touch care. This section covers how we organise our teams, manage care, and support every Family Member — regardless of risk level.", cta:"Start Section" },
  { id:"c6a", type:"component", number:"Component 6 – Part A", section:"Circles of Care & Care Management", sectionColor:S3,
    title:"High & Rising Risk: The Circle of Care Team", icon:"⭕",
    keyMessage:"For our highest-need Family Members, we wrap a dedicated, integrated team around them — the Circle of Care.",
    points:[
      { label:"What is the Circle of Care?", detail:"The Circle of Care brings together a multidisciplinary team working in a high-touch, integrated and tailored way around each high or rising risk Family Member. The team includes a nurse practitioner, Care Experience Specialists, nurses, practice facilitators, behavioral health specialists, social workers, and clinical pharmacists." },
      { label:"The Nurse Practitioner: Captain of the Team", detail:"The Nurse Practitioner leads the Circle of Care. They captain the daily huddle, actively manage the clinical care of the Family Member, ensure the Member Action Plan is meaningful and relevant to the Family Member's health goals, and coordinate priorities across the team." },
      { label:"The Care Experience Specialist: Backbone of the Circle", detail:"Care Experience Specialists each hold a panel of approximately 70 Family Members. They present updates, keep the team informed on everything happening in a Family Member's life, and serve as the connective tissue between the Family Member and the clinical team." },
      { label:"The Nurse: Chronic Care & Transitions", detail:"Nurses focus on chronic care management, transitions of care, and health education — providing clinical support that keeps Family Members on track and well informed." },
      { label:"The Practice Facilitator: Practice Liaison", detail:"The Practice Facilitator serves as a key liaison between the Circle of Care and the primary care practice — sharing information, coordinating care, and ensuring the practice is aligned with the Family Member's care plan." },
      { label:"Behavioral Health, Social Work & Clinical Pharmacy", detail:"These specialists step in as needed — often identified through interdisciplinary team rounds (IDT) — to address the full spectrum of a Family Member's needs." },
    ],
    callout:"💡 Key Principle: The Circle of Care isn't just a team structure — it's a commitment to wrapping the right people around each high-need Family Member in a high-touch, integrated and tailored way." },
  { id:"c6b", type:"component", number:"Component 6 – Part B", section:"Circles of Care & Care Management", sectionColor:S3,
    title:"High & Rising Risk: Managing Care", icon:"🏥",
    keyMessage:"The Circle of Care actively manages chronic conditions, acute events, and the full range of needs for our highest-risk Family Members.",
    points:[
      { label:"Chronic Disease Management", detail:"The core work of the Circle of Care is helping Family Members manage chronic conditions — developing self-management plans, monitoring progress, and adjusting care in line with each Family Member's goals." },
      { label:"Acute Care at Home & Transitions of Care", detail:"We manage acute situations including care that can be provided at home, and closely oversee transitions of care to prevent unnecessary readmissions." },
      { label:"Pulling in the Right Resources", detail:"We bring in whatever resources a Family Member needs — caregiver support, behavioral health intervention, social services, and more." },
      { label:"Social Driver Support", detail:"Even within a high-touch clinical model, social drivers remain central. The Circle continues to address barriers like housing, food, and transportation that affect Family Members' health outcomes." },
    ],
    callout:"💡 Key Principle: Managing care for high and rising risk Family Members means being proactive, comprehensive, and ready to respond — clinically, socially, and personally." },
  { id:"c7", type:"component", number:"Component 7", section:"Circles of Care & Care Management", sectionColor:S3,
    title:"Support for All: Population Health Services", icon:"🌐",
    keyMessage:"Every Family Member — regardless of risk level — deserves support with their health-related social needs, navigation, and access to care.",
    points:[
      { label:"Closing Health-Related Social Needs", detail:"Every Family Member we support should have their health-related social needs identified and addressed — whether that's food, housing, transportation, or other barriers to health. We make warm, meaningful referrals to community-based organisations (CBOs) rather than simply handing someone a list of phone numbers." },
      { label:"Care Navigation & Benefits Navigation", detail:"We help Family Members navigate both the health care system and their benefits — ensuring they understand what they're entitled to and can access it." },
      { label:"Health Literacy Improvement", detail:"We work to improve every Family Member's ability to understand and act on health information — foundational to self-advocacy, self-management, and better outcomes." },
      { label:"24/7 Care & Triage Access", detail:"Every Family Member we support has access to 24/7 care and triage. Whether it's a question, a concern, or an urgent need — someone is always available." },
      { label:"Tech-Enabled for Scale", detail:"While personal touch matters, Component 7 must be tech-enabled to succeed. Digital tools, automated triage pathways, and scalable platforms allow us to deliver consistent, responsive support to every Family Member at scale." },
    ],
    callout:"💡 Key Principle: Support for All means exactly that — every Family Member, every time. Technology is what makes it possible at scale." },
  { id:"q3", type:"quiz", title:"Knowledge Check – Circles of Care & Care Management",
    questions:[
      { q:"Who serves as the 'captain' of the Circle of Care team?", options:["The Care Experience Specialist","The Social Worker","The Nurse Practitioner","The Clinical Pharmacist"], answer:2, explanation:"The Nurse Practitioner leads the Circle of Care — they captain the daily huddle, actively manage the Family Member's clinical care, oversee the Member Action Plan, and coordinate priorities across the team." },
      { q:"Which of the following is a key function of Component 6 care management?", options:["24/7 digital triage for all Family Members","Managing chronic disease, acute care at home, and transitions of care to reduce readmissions","Conducting community events and building awareness","Completing the initial 360 Member View"], answer:1, explanation:"Component 6 is focused on active care management — chronic disease, acute situations including home-based care, and managing transitions to prevent readmissions." },
      { q:"What does Component 7 (Support for All) apply to?", options:["Only high and rising risk Family Members","Only Family Members who request it","Every Family Member we support, regardless of risk level","Only Family Members in the Circle of Care"], answer:2, explanation:"Component 7 is a population health approach — it applies to every Family Member we support." },
      { q:"What does IDT stand for in the context of the Circle of Care?", options:["Integrated Digital Triage","Individual Development Team","Interdisciplinary Team rounds","Internal Discharge Tracking"], answer:2, explanation:"IDT stands for Interdisciplinary Team rounds — where specialists like behavioral health, social work, and clinical pharmacy are identified and brought in to address the full spectrum of a Family Member's needs." },
    ]},
  // ── S4 ──
  { id:"s4", type:"section-header", section:"Section 4 of 4", title:"Mutually Beneficial Relationships", color:S4,
    body:"Our model doesn't operate in isolation. We build strong, reciprocal relationships with the partners who are already trusted by our Family Members — primary care practices, hospitals, facilities, and community organisations. This section covers how we work alongside those partners to deliver better outcomes together.", cta:"Start Section" },
  { id:"c8a", type:"component", number:"Component 8 – Part A", section:"Mutually Beneficial Relationships", sectionColor:S4,
    title:"PCP / Practice Support", icon:"🩺",
    keyMessage:"We work alongside primary care practices as trusted partners — augmenting their capacity, sharing data, and helping them deliver better outcomes for shared Family Members.",
    points:[
      { label:"Why Primary Care Practices?", detail:"PCPs already have established relationships with Family Members and are often a primary source of trust. Rather than duplicating that relationship, we support and strengthen it — working with practices to manage the majority of our shared Family Members together." },
      { label:"Facilitating Access", detail:"We help ensure Family Members can get in for visits — removing barriers to access and helping practices stay connected to Family Members who might otherwise fall through the gaps." },
      { label:"Augmenting Services & Capacity", detail:"When a practice doesn't have capacity available — for example, when a transition of care needs to happen — we step in to augment their capacity, provide interim support, and maintain continuity for the Family Member." },
      { label:"Co-Management of High & Rising Risk Family Members", detail:"For the most complex Family Members, we engage in co-management alongside the practice — coordinating closely so that clinical decisions and care plans are aligned." },
      { label:"Data, Insights & Performance Information", detail:"We provide practices with data and insights about their Family Member population and regularly share performance information. Our Partner Provider Executive and CMO Dyad work directly with practice leadership to review these insights and develop shared plans." },
    ],
    callout:"💡 Key Principle: Our relationship with primary care practices is built on mutual benefit. We bring data, capacity, and support — they bring trust, continuity, and clinical relationships. Together, we deliver better care for Family Members." },
  { id:"c8b", type:"component", number:"Component 8 – Part B", section:"Mutually Beneficial Relationships", sectionColor:S4,
    title:"Practice Facilitator Support", icon:"📋",
    keyMessage:"Our Practice Facilitators work directly with practices across five key workflows — improving capability, quality, and coordination for Family Members.",
    points:[
      { label:"Workflow 1: Member Rosters & Voluntary Alignment", detail:"Practice Facilitators help practices identify their attributed membership — reviewing and cleaning member rosters, supporting voluntary alignment, and ensuring roster accuracy so that no Family Member is missed." },
      { label:"Workflow 2: Transitions of Care", detail:"We set up ADT (admission, discharge, transfer) notifications emailed directly to practices and help them build a workflow ensuring every transitioning Family Member has a provider follow-up within 7 days — with a goal of contact within 2 days." },
      { label:"Workflow 3: Quality & Preventable Events", detail:"Practice Facilitators support quality workflows focused on potentially preventable events, transitions of care follow-up, and the Core Four measures: breast cancer screening, colorectal cancer screening, diabetic control, and controlling high blood pressure." },
      { label:"Workflow 4: Risk Coding & Adjustment", detail:"We support practices in ensuring suspected conditions are appropriately identified and captured — so that risk coding accurately reflects the complexity of their Family Member population." },
      { label:"Workflow 5: High & Rising Risk Care Management", detail:"Practice Facilitators also support workflows specifically around understanding, managing, and coordinating care for high and rising risk Family Members — ensuring these Family Members receive focused attention within the practice." },
    ],
    callout:"💡 Key Principle: Practice Facilitators are embedded partners — they build the workflows, capability, and habits that allow practices to consistently deliver better care for Family Members." },
  { id:"c9", type:"component", number:"Component 9", section:"Mutually Beneficial Relationships", sectionColor:S4,
    title:"Hospitals", icon:"🏨",
    keyMessage:"We partner with hospitals to divert unnecessary ED visits, support effective discharge planning, and ensure seamless coordination of care for Family Members.",
    points:[
      { label:"ED Diversion", detail:"One of our key goals with hospital partners is diverting unnecessary emergency department visits. By keeping Family Members well-supported in the community and providing 24/7 access to triage, we can help them get the right care in the right setting — before they end up in the ED." },
      { label:"Discharge Planning", detail:"We work with hospital partners to support effective discharge planning — ensuring that when a Family Member leaves the hospital, there is a clear, coordinated plan in place for what happens next." },
      { label:"Data & ADT Feeds", detail:"We ensure we have the data and ADT feeds in place to know when our Family Members are admitted, discharged, or transferred — so we can coordinate care in real time and close any gaps quickly." },
      { label:"Coordinating Care Across Settings", detail:"Our partnership with hospitals is about continuity. We bridge the gap between the inpatient and outpatient world — so Family Members don't fall through the cracks at the moment they are most vulnerable." },
    ],
    callout:"💡 Key Principle: Hospital partnerships are about being in the right place at the right time — before, during, and after a Family Member's inpatient stay." },
  { id:"c10", type:"component", number:"Component 10", section:"Mutually Beneficial Relationships", sectionColor:S4,
    title:"Facilities", icon:"🏠",
    keyMessage:"We partner with skilled nursing facilities and other care settings to ensure Family Members receive continuous, well-coordinated support — no matter where they are.",
    points:[
      { label:"Skilled Nursing Facility Partnerships", detail:"We build relationships with skilled nursing facilities and similar care settings to coordinate care for Family Members who are receiving post-acute or long-term care services." },
      { label:"24/7 Support & Escalation", detail:"We provide facility partners with access to 24/7 support and a clear escalation pathway — so that when questions or concerns arise about a Family Member, there is always someone to call." },
      { label:"Caregiver Support", detail:"We extend our caregiver support capabilities to Family Members in facility settings — recognising that caregivers remain important even when a Family Member is receiving formal care services." },
      { label:"Coordinated, Continuous Care", detail:"Our goal is to ensure that a Family Member's care doesn't become fragmented when they move into a facility setting. We stay engaged, stay informed, and help coordinate across all the parties involved in their care." },
    ],
    callout:"💡 Key Principle: Facilities are part of the care continuum. Our partnerships ensure Family Members receive the same level of coordinated, person-centred support — wherever they are." },
  { id:"c11", type:"component", number:"Component 11", section:"Mutually Beneficial Relationships", sectionColor:S4,
    title:"Home & Community-Based Partners", icon:"🌱",
    keyMessage:"Our network of home and community-based partners extends our reach — bringing care, services, and social support directly to Family Members where they live.",
    points:[
      { label:"The Togetherly Network", detail:"In many ways, this component represents our Togetherly network — our network of alternative and community-based providers who support the work we do with Family Members in their homes and communities. Together, these partners form a network that wraps around each Family Member — extending what we can offer beyond clinical care and into every aspect of their life that affects their health." },
      { label:"National Networks: Lab, Imaging & Home-Based Services", detail:"We work with national network partners to provide services like lab, imaging, and other home-based care — ensuring Family Members can access clinical services without unnecessary barriers or travel." },
      { label:"Local Community-Based Organizations", detail:"Equally important is the local component — the community-based organisations in each market that support health-related social needs for Family Members. These are the partners who provide housing support, transportation, food access, and other services that directly address the social drivers of health." },
    ],
    callout:"💡 Key Principle: Health happens at home and in the community. Our partnerships in this space ensure we can meet Family Members where they are — and address the full picture of what affects their wellbeing." },
  { id:"q4", type:"quiz", title:"Knowledge Check – Mutually Beneficial Relationships",
    questions:[
      { q:"What are the five workflow areas that Practice Facilitators support in primary care practices?", options:["Billing, scheduling, referrals, documentation, and coding","Member rosters, transitions of care, quality measures, risk coding, and high & rising risk care management","Credentialing, training, quality, staffing, and Family Member satisfaction","Family Member engagement, activation, social needs, care planning, and follow-up"], answer:1, explanation:"Practice Facilitators support five key workflows: member rosters and voluntary alignment, transitions of care, quality and preventable events (including the Core Four), risk coding and adjustment, and high & rising risk care management." },
      { q:"What are the 'Core Four' quality measures Practice Facilitators focus on?", options:["Diabetes, hypertension, asthma, and depression screening","Breast cancer screening, colorectal cancer screening, diabetic control, and controlling high blood pressure","Annual wellness visits, medication reconciliation, care plans, and advance directives","BMI screening, cholesterol management, flu vaccination, and smoking cessation"], answer:1, explanation:"The Core Four are: breast cancer screening, colorectal cancer screening, diabetic control, and controlling high blood pressure." },
      { q:"What is one of our primary goals when partnering with hospitals?", options:["Taking over discharge planning entirely","Replacing the hospital's case management team","Diverting unnecessary ED visits by keeping Family Members well-supported in the community","Providing inpatient clinical staffing"], answer:2, explanation:"ED diversion is a key goal. By providing 24/7 support and keeping Family Members connected, we help them get the right care in the right setting — before they end up in the emergency department." },
      { q:"What does our Togetherly network and home & community-based partners (Component 11) include?", options:["Only national clinical networks for lab and imaging","Only local housing and food organisations","Both national networks (lab, imaging, home-based services) and local community-based organisations that address health-related social needs","Only alternative care providers"], answer:2, explanation:"Component 11 encompasses both national networks — supporting lab, imaging, and home-based clinical services — and local community-based organisations that address social needs like housing, transportation, and food for Family Members." },
    ]},
  { id:"complete", type:"complete",
    title:"Training Complete — Well Done!",
    body:"You've completed the full Focus 11 Operating Model training. You now have a solid understanding of all 11 components across our four sections: Deeply Understand, Engaging with Empathy, Circles of Care & Care Management, and Mutually Beneficial Relationships.",
    next:"Thank you for your commitment to understanding how we work. This model is how we show up for our Family Members — every day." },
];

function btn(color, outline=false) {
  return {
    background: outline ? "transparent" : color,
    color: outline ? color : "#fff",
    border: `2px solid ${color}`,
    borderRadius: 8,
    padding: "10px 22px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer"
  };
}

export default function App() {
  const [idx, setIdx] = useState(0);
  const [expanded, setExpanded] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  const screen = screens[idx];
  const total = screens.length;
  const progress = Math.round((idx / (total - 1)) * 100);
  const sc = screen.sectionColor || screen.color || theme.primary;

  const goNext = () => { setIdx(i => Math.min(i+1, total-1)); setExpanded(null); setAnswers({}); setSubmitted(false); setScore(null); };
  const goPrev = () => { setIdx(i => Math.max(i-1, 0)); setExpanded(null); setAnswers({}); setSubmitted(false); setScore(null); };
  const submitQuiz = () => { let c=0; screen.questions.forEach((q,i) => { if(answers[i]===q.answer) c++; }); setScore(c); setSubmitted(true); };
  const allAnswered = screen.type==="quiz" && Object.keys(answers).length===screen.questions?.length;

  const expandBg = { [S1]:"#eaf1f8", [S2]:"#eaf4ef", [S3]:"#f3eef9", [S4]:"#fdf3ec" };

  return (
    <div style={{ fontFamily:"'Segoe UI',sans-serif", background:"#e8eef4", minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"24px 16px" }}>
      <div style={{ width:"100%", maxWidth:720, marginBottom:12 }}>
        <div style={{ display:"flex", justifyContent:"space-between", fontSize:12, color:"#555", marginBottom:4 }}>
          <span>Focus 11 Training</span><span>{progress}% complete</span>
        </div>
        <div style={{ background:"#cdd7e0", borderRadius:8, height:8 }}>
          <div style={{ background:theme.accent, width:`${progress}%`, height:8, borderRadius:8, transition:"width 0.4s" }} />
        </div>
      </div>

      <div style={{ background:"#fff", borderRadius:16, boxShadow:"0 4px 24px rgba(0,0,0,0.10)", maxWidth:720, width:"100%", overflow:"hidden" }}>

        {screen.type==="intro" && (
          <div>
            <div style={{ background:theme.primary, padding:"48px 40px 36px", color:"#fff" }}>
              <div style={{ fontSize:13, letterSpacing:2, textTransform:"uppercase", opacity:0.7, marginBottom:12 }}>Operating Model</div>
              <h1 style={{ margin:0, fontSize:28, fontWeight:700 }}>{screen.title}</h1>
              <p style={{ opacity:0.85, marginTop:10, fontSize:16 }}>{screen.subtitle}</p>
            </div>
            <div style={{ padding:"32px 40px" }}>
              <p style={{ fontSize:16, color:theme.text, lineHeight:1.7 }}>{screen.body}</p>
              <button onClick={goNext} style={btn(theme.primary)}>{screen.cta} →</button>
            </div>
          </div>
        )}

        {screen.type==="section-header" && (
          <div>
            <div style={{ background:sc, padding:"36px 40px 28px", color:"#fff" }}>
              <div style={{ fontSize:12, letterSpacing:2, textTransform:"uppercase", opacity:0.8, marginBottom:8 }}>{screen.section}</div>
              <h2 style={{ margin:0, fontSize:26, fontWeight:700 }}>{screen.title}</h2>
            </div>
            <div style={{ padding:"28px 40px" }}>
              <p style={{ fontSize:15, color:theme.text, lineHeight:1.7 }}>{screen.body}</p>
              <div style={{ display:"flex", gap:12, marginTop:24 }}>
                <button onClick={goPrev} style={btn("#888",true)}>← Back</button>
                <button onClick={goNext} style={btn(sc)}>{screen.cta} →</button>
              </div>
            </div>
          </div>
        )}

        {screen.type==="component" && (
          <div>
            <div style={{ background:sc, padding:"32px 40px 24px", color:"#fff" }}>
              <div style={{ fontSize:12, letterSpacing:2, textTransform:"uppercase", opacity:0.7, marginBottom:6 }}>{screen.section} · {screen.number}</div>
              <h2 style={{ margin:0, fontSize:24, fontWeight:700 }}>{screen.icon} {screen.title}</h2>
              <p style={{ marginTop:10, opacity:0.9, fontSize:15 }}>{screen.keyMessage}</p>
            </div>
            <div style={{ padding:"28px 40px" }}>
              <p style={{ fontSize:13, color:"#666", marginBottom:16 }}>Tap each area to explore:</p>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                {screen.points.map((pt,i) => (
                  <div key={i} onClick={() => setExpanded(expanded===i ? null : i)}
                    style={{ border:`2px solid ${expanded===i ? sc : "#dde3ea"}`, borderRadius:10, padding:"14px 18px", cursor:"pointer", background:expanded===i ? (expandBg[sc]||"#f5f5f5") : "#fafbfc", transition:"all 0.2s" }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                      <span style={{ fontWeight:600, color:sc, fontSize:15 }}>{pt.label}</span>
                      <span style={{ color:sc, fontSize:18 }}>{expanded===i ? "▲" : "▼"}</span>
                    </div>
                    {expanded===i && <p style={{ margin:"10px 0 0", fontSize:14, color:theme.text, lineHeight:1.6 }}>{pt.detail}</p>}
                  </div>
                ))}
              </div>
              <div style={{ background:"#fef9e7", border:"1px solid #f9e79f", borderRadius:10, padding:"14px 18px", marginTop:20, fontSize:14, color:"#7d6608", lineHeight:1.6 }}>
                {screen.callout}
              </div>
              <div style={{ display:"flex", gap:12, marginTop:24 }}>
                <button onClick={goPrev} style={btn("#888",true)}>← Back</button>
                <button onClick={goNext} style={btn(sc)}>Continue →</button>
              </div>
            </div>
          </div>
        )}

        {screen.type==="quiz" && (
          <div>
            <div style={{ background:"#2c3e50", padding:"28px 40px 20px", color:"#fff" }}>
              <div style={{ fontSize:12, letterSpacing:2, textTransform:"uppercase", opacity:0.7, marginBottom:6 }}>Knowledge Check</div>
              <h2 style={{ margin:0, fontSize:22 }}>{screen.title}</h2>
            </div>
            <div style={{ padding:"28px 40px" }}>
              {submitted && (
                <div style={{ background:score===screen.questions.length?"#eafaf1":"#fdecea", border:`1px solid ${score===screen.questions.length?"#a9dfbf":"#f5b7b1"}`, borderRadius:10, padding:"14px 18px", marginBottom:20, fontSize:15, fontWeight:600, color:score===screen.questions.length?theme.success:theme.warn }}>
                  {score===screen.questions.length ? "🎉 Perfect score!" : `You got ${score} of ${screen.questions.length} correct. Review the explanations below.`}
                </div>
              )}
              {screen.questions.map((q,qi) => (
                <div key={qi} style={{ marginBottom:24 }}>
                  <p style={{ fontWeight:600, color:theme.text, fontSize:15, marginBottom:10 }}>{qi+1}. {q.q}</p>
                  {q.options.map((opt,oi) => {
                    const sel=answers[qi]===oi, correct=oi===q.answer;
                    let bg=sel?"#d6eaf8":"#fafbfc", border=sel?theme.accent:"#dde3ea";
                    if(submitted){ if(correct){ bg="#eafaf1"; border="#27ae60"; } else if(sel&&!correct){ bg="#fdecea"; border=theme.warn; } }
                    return (
                      <div key={oi} onClick={() => !submitted && setAnswers(a => ({...a,[qi]:oi}))}
                        style={{ border:`2px solid ${border}`, borderRadius:8, padding:"10px 16px", marginBottom:8, cursor:submitted?"default":"pointer", background:bg, fontSize:14, color:theme.text, display:"flex", alignItems:"center", gap:10 }}>
                        <span style={{ width:20, height:20, borderRadius:"50%", border:`2px solid ${border}`, background:sel?theme.accent:"#fff", display:"inline-block", flexShrink:0 }} />
                        {opt}
                      </div>
                    );
                  })}
                  {submitted && <div style={{ background:"#eaf4fb", borderLeft:`4px solid ${theme.accent}`, padding:"10px 14px", borderRadius:6, fontSize:13, color:"#1a5276", marginTop:4 }}>{q.explanation}</div>}
                </div>
              ))}
              <div style={{ display:"flex", gap:12, marginTop:8, flexWrap:"wrap" }}>
                <button onClick={goPrev} style={btn("#888",true)}>← Back</button>
                {!submitted
                  ? <button onClick={submitQuiz} disabled={!allAnswered} style={btn(allAnswered?theme.primary:"#aaa")}>Submit Answers</button>
                  : <><button onClick={() => { setAnswers({}); setSubmitted(false); setScore(null); }} style={btn("#888",true)}>Try Again</button><button onClick={goNext} style={btn(theme.success)}>Continue →</button></>
                }
              </div>
            </div>
          </div>
        )}

        {screen.type==="complete" && (
          <div>
            <div style={{ background:theme.success, padding:"40px 40px 28px", color:"#fff", textAlign:"center" }}>
              <div style={{ fontSize:48, marginBottom:12 }}>🎓</div>
              <h2 style={{ margin:0, fontSize:24 }}>{screen.title}</h2>
            </div>
            <div style={{ padding:"32px 40px", textAlign:"center" }}>
              <p style={{ fontSize:15, color:theme.text, lineHeight:1.7, marginBottom:16 }}>{screen.body}</p>
              <p style={{ fontSize:14, color:"#555", fontStyle:"italic" }}>{screen.next}</p>
              <div style={{ display:"flex", gap:12, justifyContent:"center", marginTop:24 }}>
                <button onClick={goPrev} style={btn("#888",true)}>← Review</button>
                <button onClick={() => setIdx(0)} style={btn(theme.primary)}>Start Over</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
