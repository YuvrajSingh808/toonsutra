import members from "../assets/members/members";
import bgImage from "../assets/meetTheTeam.png"
class Member {
    constructor(name, position, image) {
        this.name = name;
        this.position = position;
        this.image = image;
    }
}

export default function MeetTheTeam() {
    const membersList = [];
    const positions = ['CEO', 'VP Strategy & Ops', 'VP Content', 'Sr. Manager', 'Community & Digital', 'Content Producer', 'Senior Designer']
    const names = ['Sharad Devarajan', 'Navin Miranda', 'Ashwin Pande', 'Nilesh Mahadik', 'Michelle Patrao', 'Punith Shetty', 'Rakesh Mahadik']
    for (let i = 0; i < names.length; i++) {
        membersList.push(new Member(names[i], positions[i], members[names[i].split(' ')[0].toLowerCase()]));
    }
    return (
        <div className="my-10">
            <p className="text-[40px] font-medium text-center text-[#1E272D]">Team Toonsutra</p>
            <div className="my-14 flex items-center justify-center sm:h-[540px] h-96">
                <div className="absolute z-10">
                    <div className="flex flex-wrap sm:gap-x-14 gap-x-4 justify-center mb-20">
                        <MemberCard name={membersList[0].name} position={membersList[0].position} image={membersList[0].image} align='bottom' />
                        <MemberCard name={membersList[1].name} position={membersList[1].position} image={membersList[1].image} align='bottom' />
                        <MemberCard name={membersList[2].name} position={membersList[2].position} image={membersList[2].image} align='bottom' />
                    </div>
                    <div className="flex flex-wrap sm:gap-x-14 gap-x-4 gap-y-8 justify-center mt-10">
                        <MemberCard name={membersList[3].name} position={membersList[3].position} image={membersList[3].image} align='top' />
                        <MemberCard name={membersList[4].name} position={membersList[4].position} image={membersList[4].image} align='top' />
                        <MemberCard name={membersList[5].name} position={membersList[5].position} image={membersList[5].image} align='top' />
                        <MemberCard name={membersList[6].name} position={membersList[6].position} image={membersList[6].image} align='top' />
                    </div>
                </div>
                <img src={bgImage} alt="background" className="w-full h-1/2 z-0" />
            </div>
        </div>
    );
}

function MemberCard(props) {
    return (
        <div className={`flex bg-[#E4E4E4] items-center sm:w-56 w-24 sm:h-56 h-24 sm:rounded-2xl rounded-md relative sm:py-12 py-2 sm:px-0 px-2 text-center ${props.align === 'top' ? 'flex-col-reverse' : ' flex-col'}`}>
            <img src={props.image} alt="member" className={`sm:w-28 sm:h-28 w-14 h-14 rounded-full absolute ${props.align === 'top' ? 'sm:-top-8 -top-4' : 'sm:-bottom-8 -bottom-4'}`} />
            <div className="flex flex-col items-center">
                <p className="sm:text-[20px] text-[10px] font-semibold text-textPrimary">{props.name}</p>
                <p className="sm:text-[16px] text-[8px] text-textPrimary sm:mt-2">{props.position}</p>
            </div>
        </div>
    );
}