export function LogoHorizontal({ className = '', isDark = false }: { className?: string; isDark?: boolean }) {
  const textColor = isDark ? '#FFFFFF' : '#E55625'
  const accentColor = isDark ? '#E55625' : '#1F2645'
  
  return (
    <svg 
      width="500" 
      height="180" 
      viewBox="0 0 500 180" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="wreath-compact">
        <circle cx="90" cy="90" r="70" stroke={accentColor} strokeWidth="2" fill="none" opacity="0.8"/>
        <circle cx="90" cy="90" r="73" stroke={accentColor} strokeWidth="1.5" fill="none" opacity="0.6"/>
        <circle cx="90" cy="90" r="67" stroke={accentColor} strokeWidth="1.5" fill="none" opacity="0.6"/>
        
        <circle cx="90" cy="17" r="3" fill="#E55625"/>
        <circle cx="105" cy="20" r="3" fill="#E55625"/>
        <circle cx="119" cy="27" r="4" fill="#E55625"/>
        
        <circle cx="131" cy="37" r="3" fill={accentColor}/>
        <circle cx="142" cy="50" r="4" fill={accentColor}/>
        
        <path d="M 153 66 L 156 69 L 159 66 C 159 64 158 63 157 63 C 156 63 156 63.5 155 64.5 C 154 63.5 154 63 153 63 C 152 63 151 64 151 66 Z" fill={accentColor} opacity="0.9"/>
        <path d="M 158 85 L 161 88 L 164 85 C 164 83 163 82 162 82 C 161 82 161 82.5 160 83.5 C 159 82.5 159 82 158 82 C 157 82 156 83 156 85 Z" fill={accentColor} opacity="0.8"/>
        
        <path d="M 160 105 L 161.5 109 L 165.5 109 L 162.5 111.5 L 164 115.5 L 160 113 L 156 115.5 L 157.5 111.5 L 154.5 109 L 158.5 109 Z" fill={accentColor} opacity="0.7"/>
        
        <circle cx="155" cy="125" r="3" fill={accentColor}/>
        <circle cx="145" cy="140" r="4" fill={accentColor}/>
        
        <path d="M 125 153 L 128 156 L 131 153 C 131 151 130 150 129 150 C 128 150 128 150.5 127 151.5 C 126 150.5 126 150 125 150 C 124 150 123 151 123 153 Z" fill="#E55625" opacity="0.9"/>
        <circle cx="90" cy="163" r="4" fill="#E55625"/>
        <path d="M 55 153 L 58 156 L 61 153 C 61 151 60 150 59 150 C 58 150 58 150.5 57 151.5 C 56 150.5 56 150 55 150 C 54 150 53 151 53 153 Z" fill="#E55625" opacity="0.9"/>
        
        <circle cx="35" cy="140" r="4" fill="#E55625"/>
        <circle cx="27" cy="125" r="3" fill="#E55625"/>
        
        <circle cx="22" cy="105" r="3" fill="#E55625"/>
        <circle cx="20" cy="90" r="4" fill="#E55625"/>
        <circle cx="22" cy="75" r="3" fill="#E55625"/>
        
        <circle cx="27" cy="55" r="4" fill="#E55625"/>
        <circle cx="38" cy="40" r="3" fill="#E55625"/>
        <circle cx="52" cy="28" r="4" fill="#E55625"/>
        <circle cx="69" cy="21" r="3" fill="#E55625"/>
        
        <g id="event-tent" transform="translate(90 90)">
          <g fill={accentColor}>
            <rect x="-45" y="15" width="4" height="35" rx="1" />
            <rect x="41" y="15" width="4" height="35" rx="1" />
            <rect x="-2" y="0" width="4" height="50" rx="1" />
            <rect x="-45" y="13" width="90" height="3" rx="1" />
          </g>
          
          <path d="M0 -50 L-55 15 L55 15 Z" fill="#FFFFFF" opacity="0.95"/>
          <path d="M0 -50 L-55 15 L-45 15 L0 -40 Z" fill="#F5F5F5" opacity="0.98"/>
          <path d="M0 -50 L55 15 L45 15 L0 -40 Z" fill="#F5F5F5" opacity="0.98"/>
          
          <path d="M0 -50 C -15 -35, -30 -20, -45 15 L -55 15 C -35 -15, -15 -35, 0 -50 Z" fill="#E0E0E0" opacity="0.8"/>
          <path d="M0 -50 C 15 -35, 30 -20, 45 15 L 55 15 C 35 -15, 15 -35, 0 -50 Z" fill="#E0E0E0" opacity="0.8"/>
          <path d="M-25 -15 L-30 5 L-20 5 Z" fill="#D0D0D0" opacity="0.7"/>
          <path d="M25 -15 L30 5 L20 5 Z" fill="#D0D0D0" opacity="0.7"/>
          
          <path d="M-45 15 L-45 50 L45 50 L45 15 Z" fill="#FFFFFF" opacity="0.9"/>
          
          <path d="M-45 15 L-35 50 L-25 50 L-35 15 Z" fill="#F5F5F5" opacity="0.95"/>
          <path d="M45 15 L35 50 L25 50 L35 15 Z" fill="#F5F5F5" opacity="0.95"/>
          <path d="M-35 15 C -40 25, -40 40, -35 50 L-45 50 L-45 15 Z" fill="#E0E0E0" opacity="0.7"/>
          <path d="M35 15 C 40 25, 40 40, 35 50 L45 50 L45 15 Z" fill="#E0E0E0" opacity="0.7"/>
          <path d="M-15 15 L-20 50 L-10 50 L-5 15 Z" fill="#D0D0D0" opacity="0.6"/>
          <path d="M15 15 L20 50 L10 50 L5 15 Z" fill="#D0D0D0" opacity="0.6"/>
          <rect x="-45" y="48" width="90" height="2" fill={accentColor} opacity="0.6"/>
        </g>
      </g>
      
      <g id="text">
        <text x="190" y="85" fontFamily="'Brush Script MT', 'Lucida Handwriting', cursive" fontSize="42" fill={textColor} textAnchor="start" fontWeight="600" fontStyle="italic">
          Event Solutions
        </text>
        
        <text x="190" y="115" fontFamily="'Trebuchet MS', sans-serif" fontSize="22" fill={isDark ? '#FFFFFF' : accentColor} textAnchor="start" letterSpacing="4" fontWeight="500">
          THIKA
        </text>
      </g>
    </svg>
  )
}
