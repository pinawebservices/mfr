"use client";
import { useEffect } from 'react';

export default function TestPage() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://square.site/appointments/buyer/widget/5hrrbjr68wvw56/L6A3P6TN620X4.js';
        script.async = true;
        document.body.appendChild(script);

        // Move the widget into your container after it loads
        const moveWidget = () => {
            // Try to find the widget (iframe or container)
            const widget = document.querySelector('[data-square-appointment], .square-appointments, iframe[src*="squareup.com"]');
            const container = document.getElementById('booking-widget');
            if (widget && container && !container.contains(widget)) {
                container.appendChild(widget);
            }
        };

        // Try moving the widget a few times (in case it loads slowly)
        const timers = [500, 1000, 2000, 3000].map(delay =>
            setTimeout(moveWidget, delay)
        );

        return () => {
            document.body.removeChild(script);
            timers.forEach(clearTimeout);
        };
    }, []);

    return (
        <div>
            {/* Header is in layout.tsx */}
            <div id="booking-widget" style={{ minHeight: '600px', width: '100%' }} />
            {/* Footer is in layout.tsx */}
        </div>
    );
}