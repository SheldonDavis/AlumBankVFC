import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [    
    layout(`routes/shell.tsx`, [
        index(`routes/home.tsx`),
        route(`who-we-are`,`routes/WhoWeAre.tsx`,[
            route(`about-us`,`routes/WhoWeAre/aboutUs.tsx`),
            route(`history`,`routes/WhoWeAre/history.tsx`),
            route(`apparatus`,`routes/WhoWeAre/apparatus.tsx`),
            route(`knox-box`,`routes/WhoWeAre/knoxBox.tsx`),
        ]),
        route(`membership`,`routes/membership.tsx`,[
            route(`officers`,`routes/Membership/officers.tsx`),
            route(`members`,`routes/Membership/members.tsx`),
            route(`auxiliary-members`,`routes/Membership/auxiliaryMembers.tsx`),
            route(`become-a-member`,`routes/Membership/becomeAMember.tsx`),
        ]),
        route(`activities`,`routes/activities.tsx`,[
            route(`auctions`,`routes/Activities/auctions.tsx`),
            route(`car-show`,`routes/Activities/carShow.tsx`),
            // route(``,``),
            // route(``,``),
        ]),
        route(`contacts-rentals`,`routes/contactsRentals.tsx`,[
            route(`contact-us`,`routes/ContactsRentals/contactUs.tsx`),
            route(`fire-hall-rentals`,`routes/ContactsRentals/fireHallRentals.tsx`),
            // route(``,``),
            // route(``,``),
        ]),

    ])
] satisfies RouteConfig;
