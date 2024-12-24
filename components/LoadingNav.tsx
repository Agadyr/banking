import { Loader2 } from 'lucide-react'
import React from 'react'

interface LoadingNavProps {
    loading: boolean | null;
  }

const LoadingNav: React.FC<LoadingNavProps> = ({ loading }) => {
  return (
    <>
    {loading && (
        <div
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-gray-100 bg-opacity-75"
        >
        <div className="flex flex-col items-center">
            <Loader2 size={80} className="animate-spin text-black" color='blue' />
            <p className="mt-4 text-blue-500 text-sm font-medium">Loading...</p>
        </div>
        </div>
    )}
    </>
  )
}

export default LoadingNav