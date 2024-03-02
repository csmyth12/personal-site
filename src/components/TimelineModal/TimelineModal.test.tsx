import { render, screen, waitFor } from "@testing-library/react"
import React from 'react'
import { TimelineModal, TimelineModalProps } from "./TimelineModal"
import { TimelineChunk } from "@/constants"

const testChunk: TimelineChunk = {
    year: '2024',
    title: 'Test',
    description: 'This is a test'
}

const mockOnClose = jest.fn()

const testProps: TimelineModalProps = {
    chunk: testChunk,
    colour: 'teal-500',
    onClose: mockOnClose,
    isOpen: true
}

describe('TimelineModal', () => {
    it('should render an open modal', async () => {
        render(<TimelineModal {...testProps} />)
        expect(await screen.findByText('This is a test')).toBeInTheDocument()
        const year = await screen.findByText('2024')
        expect(year).toHaveClass('text-teal-500')
    })

    it('should not render when isOpen is false', async () => {
        render(<TimelineModal {...testProps} isOpen={false} />)
        await waitFor(() => 
            expect(screen.queryByText('This is a test')).not.toBeInTheDocument()
        )
    })

    it('should call onClose when the X button is clicked', async () => {
        render(<TimelineModal {...testProps} />)
        const button = screen.getByRole('button')
        button.click()
        await waitFor(() => 
            expect(mockOnClose).toHaveBeenCalledTimes(1)
        )
    })
})
