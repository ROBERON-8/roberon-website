import React from 'react';
import Navbar from '../components/Navbar';

const liveEvent = {
    title: 'Robotics Workshop 2024',
    date: 'June 15, 2024',
    description: 'Join us for a hands-on robotics workshop. Learn, build, and compete!',
    image: '/images/live-event.jpg',
    status: 'LIVE NOW'
};

const pastEvents = [
    {
        title: 'AI Seminar',
        date: 'May 10, 2024',
        image: '/images/ai-seminar.jpg',
        attendees: '250+'
    },
    {
        title: 'Drone Racing',
        date: 'April 20, 2024',
        image: '/images/drone-racing.jpg',
        attendees: '180+'
    },
    {
        title: 'Tech Talk',
        date: 'March 5, 2024',
        image: '/images/tech-talk.jpg',
        attendees: '320+'
    },
];

export default function Events() {
    return ( 
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
                
                {/* Page Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-white">Our </span>
                        <span className="text-red-500">Events</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Discover upcoming workshops and explore our exciting past events
                    </p>
                </div>

                {/* Live Event Section */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <h2 className="text-2xl font-bold text-red-500">Live Event</h2>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                            <span className="text-red-400 text-sm font-medium">{liveEvent.status}</span>
                        </div>
                    </div>
                    
                    <div className="relative bg-gradient-to-r from-red-900/20 to-red-600/20 border border-red-500/30 rounded-2xl p-8 backdrop-blur-sm">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent rounded-2xl"></div>
                        
                        <div className="relative flex flex-col lg:flex-row items-center gap-8">
                            {/* Image Placeholder */}
                            <div className="flex-shrink-0">
                                <div className="w-64 h-40 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-black/20"></div>
                                    <div className="relative text-white text-center">
                                        <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                            </svg>
                                        </div>
                                        <p className="text-sm font-medium">Live Event</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 text-center lg:text-left">
                                <h3 className="text-3xl font-bold text-white mb-3">
                                    {liveEvent.title}
                                </h3>
                                <div className="flex items-center gap-2 justify-center lg:justify-start mb-4">
                                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-red-400 font-semibold text-lg">{liveEvent.date}</span>
                                </div>
                                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                    {liveEvent.description}
                                </p>
                                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg hover:shadow-red-500/25">
                                    Join Live Event
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Past Events Section */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-8">Past Events</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pastEvents.map((event, idx) => (
                            <div 
                                key={idx} 
                                className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all duration-300 group hover:transform hover:scale-105"
                            >
                                {/* Image Placeholder */}
                                <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <div className="relative text-center">
                                        <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                                            <svg className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                                            </svg>
                                        </div>
                                        <p className="text-gray-300 text-sm">Event</p>
                                    </div>
                                    
                                    {/* Attendees Badge */}
                                    <div className="absolute top-4 right-4 bg-red-500/90 text-white text-xs font-semibold px-2 py-1 rounded-full">
                                        {event.attendees} attendees
                                    </div>
                                </div>
                                
                                {/* Content */}
                                <div className="p-6">
                                    <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
                                        {event.title}
                                    </h4>
                                    <div className="flex items-center gap-2 mb-4">
                                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className="text-gray-400 text-sm">{event.date}</span>
                                    </div>
                                    
                                    {/* Action Buttons */}
                                    <div className="flex gap-2">
                                        <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white text-sm py-2 px-4 rounded-lg transition-colors">
                                            View Details
                                        </button>
                                        <button className="bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-4 rounded-lg transition-colors">
                                            Gallery
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}